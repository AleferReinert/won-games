import { RibbonColors } from 'components/Ribbon/Ribbon'
import { RibbonSizes } from 'components/Ribbon/Ribbon'
import Button from 'components/Button/Button'
import Ribbon from 'components/Ribbon/Ribbon'
import * as S from './Banner.styles'

export type BannerProps = {
  img: string
  title: string
  description: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const Banner = ({
  img,
  title,
  description,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize,
  ribbonColor
}: BannerProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}
      <S.Image src={img} role='img' aria-label={title} />
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Description dangerouslySetInnerHTML={{ __html: description }} />
        <Button as='a' href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  )
}

export default Banner
