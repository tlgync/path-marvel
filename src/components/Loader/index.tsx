import Lottie from 'react-lottie';
import * as animationData from '../../assets/lotie.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Loader = () => (

  <Lottie
    options={defaultOptions}
    height={55}
    width={55}
  />

);
