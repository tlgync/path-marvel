import Lottie from 'react-lottie';
import * as animationData from '../../assets/lotie.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
};

export const Loader = () => (
  <div style={{ position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#eee',
    zIndex: 99 }}
  >
    <Lottie
      options={defaultOptions}
      height={55}
      width={55}
    />
  </div>
);
export const LoaderScroll = () => (
  <Lottie
    options={defaultOptions}
    height={55}
    width={55}
  />

);
