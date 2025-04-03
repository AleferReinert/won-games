import * as S from './Skeleton.styles'

export interface SkeletonProps {
  width: string | number
  height: string | number
}

const Skeleton = ({ width, height }: SkeletonProps) => {
  return <S.Wrapper width={width} height={height} data-testid='SkeletonComponent'></S.Wrapper>
}

export default Skeleton
