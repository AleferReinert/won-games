import Button from 'components/Button/Button'
import Ribbon, { RibbonProps } from 'components/Ribbon/Ribbon'
import * as S from './Banner.styles'

export interface BannerProps {
  id: string
  img: string
  title: string
  description: string
  buttonLabel: string
  buttonLink: string
  ribbon?: RibbonProps
}

const Banner = ({ img, title, description, buttonLabel, buttonLink, ribbon }: BannerProps) => {
  return (
    <S.Wrapper>
      {ribbon?.text && <Ribbon text={ribbon.text} size={ribbon.size} color={ribbon.color} />}
      <S.Image src={img} role='img' aria-label={title} />
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Description dangerouslySetInnerHTML={{ __html: description }} />
        <Button asLink href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  )
}

export default Banner
