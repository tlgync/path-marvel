interface IDesc {
    description: string
}

export const DetailDescription = ({ description }: IDesc) => (
  <div className="detail-desc">
    <span>Description</span>
    <span>{description}</span>
  </div>
);
