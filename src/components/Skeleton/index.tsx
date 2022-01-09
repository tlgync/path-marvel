import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const SkeletonLoading = () => (
  <div style={{ width: '100%' }}>
    <SkeletonTheme baseColor="#5e6c77" highlightColor="#a9b7c1">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Skeleton style={{ width: 300, height: 400, margin: 10 }} count={30} />
        <Skeleton style={{ width: 300, height: 400, margin: 10 }} count={30} />
        <Skeleton style={{ width: 300, height: 400, margin: 10 }} count={30} />
        <Skeleton style={{ width: 300, height: 400, margin: 10 }} count={30} />
        <Skeleton style={{ width: 300, height: 400, margin: 10 }} count={30} />
        <Skeleton style={{ width: 300, height: 400, margin: 10 }} count={30} />
        <Skeleton style={{ width: 300, height: 400, margin: 10 }} count={30} />
      </div>
    </SkeletonTheme>
  </div>
);
