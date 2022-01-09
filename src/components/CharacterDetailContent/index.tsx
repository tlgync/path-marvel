interface ICharacterDetail {
    path:string
    name:string
}

export const CharacterDetailContent = ({ path, name }: ICharacterDetail) => (
  <div className="detailContainer">
    <img className="characterDetail-img" src={`${path}.jpg`} alt="character" />
    <span className="characterDetail-name">{name}</span>
  </div>
);
