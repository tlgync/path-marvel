import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CharacterNotFound = () => (
  <div className="notfound">
    <LazyLoadImage effect="blur" className="characterDetail-img" src="./img/marvelalert.png" alt="character" />
    <span>Character Not Found</span>
  </div>
);
