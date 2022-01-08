import { IThumbnail } from '../../types/CharactersType';

interface ICharacter {
  name:string
  image: IThumbnail
}

export const CharacterCard = ({ name, image }: ICharacter) => (
  <div className="character">
    <img className="character-img" src={`${image.path}.jpg`} alt="character" />
    <div className="character-name">{name}</div>
  </div>
);
