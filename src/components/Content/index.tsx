import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { charactersSelector, getAllCharacters } from '../../slices/Characters';
// import { getAllComics } from '../../slices/Comics';
import { useAppDispatch } from '../../store';
import { CharacterCard } from '../CharacterCard';
import { Loader } from '../Loader';

export const Content = React.memo(() => {
  const loader = useRef<HTMLInputElement>(null);
  const [limit, setLimit] = useState<number>(20);
  const dispatch = useAppDispatch();
  const { data, loading, hasErrors } = useSelector(charactersSelector);
  // Catch to scroll event
  const handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setLimit((prev:number) => prev + 10);
    }
  }, []);

  // scroll optıon
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  // fetch
  useEffect(() => {
    if (!hasErrors) {
      dispatch(getAllCharacters(limit));
      // dispatch(getAllComics());
    }
  }, [limit]);

  return (
    <>
      <div className="content">
        { data.map(item => (
          <CharacterCard key={item.id} image={item.thumbnail} name={item.name} />
        ))}
      </div>
      <div ref={loader} />
      {loading && <Loader />}
    </>
  );
});
