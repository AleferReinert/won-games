import * as S from './Skeleton.styles'

export interface SkeletonProps {
  width: string | number
  height: string | number
  $rounded?: boolean
}

const Skeleton = ({ width, height, $rounded = false }: SkeletonProps) => {
  return <S.Wrapper width={width} height={height} $rounded={$rounded} data-testid='SkeletonComponent'></S.Wrapper>
}

export default Skeleton
