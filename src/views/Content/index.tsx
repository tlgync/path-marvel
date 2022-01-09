import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { charactersSelector, getAllCharacters, incrementLimits, searchCharacter } from '../../slices/Characters';
import { CharacterCard, Header } from '../../components';
import { useAppDispatch } from '../../store';
import { SkeletonLoading } from '../../components/Skeleton';

export const Content = () => {
  const loader = useRef<HTMLInputElement>(null);
  const { data, loading } = useSelector(charactersSelector);
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  // onChange event
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const text:string = e.target.value;
    setValue(text);
    if (text === '') {
      dispatch(getAllCharacters(30));
    }
  };

  // handle Search
  const handleSearch = () => {
    if (value === '') {
      dispatch(getAllCharacters(30));
    } else {
      dispatch(searchCharacter(value));
    }
  };

  // handle search key press ENTER
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value !== '') {
      dispatch(searchCharacter(value));
    } else if (e.key === 'Enter' && value === '') {
      dispatch(getAllCharacters(30));
    }
  };

  // Handle Scroll
  const handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      if (value === '') {
        dispatch(incrementLimits());
      }
    }
  }, []);

  // scroll option
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    if (value === '') {
      const observer = new IntersectionObserver(handleObserver, option);
      if (loader.current) observer.observe(loader.current);
    }
  }, [handleObserver]);

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
        {data.map(item => (
          <CharacterCard key={item.id} image={item.thumbnail} name={item.name} id={item.id} />
        ))}
      </div>
      <div ref={loader} />
      {loading && <SkeletonLoading />}
    </>
  );
};
