import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { charactersSelector, getAllCharacters, incrementLimits, refreshLimits, searchCharacter } from '../../slices/Characters';
import { CharacterCard, Header, LoaderScroll, CharacterNotFound } from '../../components';
import { useAppDispatch } from '../../store';

export const Content = () => {
  // Dispatch
  const dispatch = useAppDispatch();
  // Ref
  const loader = useRef<HTMLInputElement>(null);
  // selectors
  const { data, loading } = useSelector(charactersSelector);
  // states
  const [value, setValue] = useState<string>('');
  const [infinitiFlag, setInfinitiFlag] = useState<boolean>(true);
  const [isLoaderShow, setIsLoaderShow] = useState<boolean>(true);

  // onChange event
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const text:string = e.target.value;
    setValue(text);
    if (text === '') {
      setInfinitiFlag(true);
      dispatch(refreshLimits());
      dispatch(getAllCharacters(30));
      window.scroll(0, 0);
    }
  };

  // handle Search
  const handleSearch = () => {
    if (value === '') {
      dispatch(getAllCharacters(30));
      setInfinitiFlag(true);
    } else {
      dispatch(searchCharacter(value));
      setInfinitiFlag(false);
    }
  };

  // handle search key press ENTER
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value !== '') {
      dispatch(searchCharacter(value));
      setInfinitiFlag(false);
    }
  };

  // Handle Scroll
  const handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      dispatch(incrementLimits());
    }
  }, []);

  // scroll option
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver, isLoaderShow]);

  useEffect(() => {
    setIsLoaderShow(infinitiFlag);
  }, [infinitiFlag]);

  return (
    <>
      <Header
        handleKeyPress={handleKeyPress}
        onChange={onChange}
        placeHolder="Search characters"
        value={value}
        handleSearch={handleSearch}
      />
      <div className="content">
        {data.length > 0 ? data.map(item => (
          <CharacterCard key={item.id} image={item.thumbnail} name={item.name} id={item.id} />
        )) : (
          !loading && <CharacterNotFound />
        )}
      </div>
      {isLoaderShow && <div ref={loader} />}
      {loading && <LoaderScroll />}
    </>
  );
};
