import { ComicDetailRow } from '../ComicDetailRow';
import { ComicTitle } from '../ComicTitle';

interface IComic {
    path: string
    title: string
    pageCount: string
    date: string
    price: string
}

export const ComicCard = ({ path, title, pageCount, date, price }: IComic) => (
  <>
    <img className="comic-img" src={`${path}.jpg`} alt="" />
    <div className="comic-content">
      <ComicTitle title={title} />
      <ComicDetailRow content={pageCount} title="Page Count" />
      <ComicDetailRow content={date} title="Publish Date" />
      <ComicDetailRow content={price} title="Price" />
    </div>
  </>
);
