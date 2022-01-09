import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CharacterDetailContent, ComicCard, ComicsHeader, DetailDescription, Loader } from '../../components';
import { characterDetailSelector, getCharacterDetail } from '../../slices/CharacterDetail';
import { comicsSelector, getComicsDetail } from '../../slices/Comics';
import { useAppDispatch } from '../../store';
import { IComicsResult } from '../../types/ComicsType';

interface IID {
    id: string
}

export const Detail = () => {
  const { id }: IID = useParams();
  const dispatch = useAppDispatch();
  const { detailData, detailLoading } = useSelector(characterDetailSelector);
  const [comicList, setComicList] = useState<IComicsResult[]>([]);
  const { comicsData } = useSelector(comicsSelector);
  const [value, setValue] = useState<string>('');

  // onChange event about search input
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const text:string = e.target.value;
    setValue(text);
    setComicList(comicsData.filter(comic => comic.title.toLocaleLowerCase().includes(text.toLowerCase())));
  };

  useEffect(() => {
    dispatch(getCharacterDetail(id));
    dispatch(getComicsDetail(id));
  }, []);

  useEffect(() => {
    if (comicList.length === 0)setComicList(comicsData);
  }, [comicsData]);

  return (
    detailLoading ? <Loader /> : (
      <>
        <ComicsHeader placeHolder="Search comics" onChange={onChange} value={value} />
        <div className="column">
          <CharacterDetailContent path={detailData[0] && detailData[0].thumbnail.path} name={detailData[0] && detailData[0].name} />
          <div className="detail-content">
            <DetailDescription description={detailData[0] && (detailData[0].description || '-')} />

            <div className="comics">
              {comicList.map(comic => (
                <div key={comic.id} className="comic">
                  <ComicCard
                    path={`${(comic.images[0] && comic.images[0].path) || 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge'}`}
                    title={comic.title}
                    pageCount={comic.pageCount}
                    date={new Date(comic.dates[0].date).toLocaleDateString()}
                    price={comic.prices[0].price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  );
};
