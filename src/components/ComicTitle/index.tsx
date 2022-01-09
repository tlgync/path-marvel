interface ITitle {
    title:string
}

export const ComicTitle = ({ title }: ITitle) => (
  <div className="comic-title">
    <span>{title}</span>
  </div>
);
