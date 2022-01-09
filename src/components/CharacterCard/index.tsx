import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IThumbnail } from '../../types/CharactersType';

interface ICharacter {
  name:string
  image: IThumbnail
  id: string
}

export const CharacterCard = ({ name, image, id }: ICharacter) => (
  <Link style={{ color: 'rgba(0,0,0,.85)' }} to={`/detail/${id}`}>
    <div className="character">
      <LazyLoadImage className="character-img" src={`${image.path}.jpg`} alt="character" />
      <div className="character-name">{name}</div>
    </div>
  </Link>
);
