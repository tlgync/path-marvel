interface IComicRow {
    content: string
    title: string
}

export const ComicDetailRow = ({ content, title }: IComicRow) => (
  <div className="comic-title-row">
    <span>{title}: </span>
    <span>{content}</span>
  </div>
);
