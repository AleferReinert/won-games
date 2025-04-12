import Button from 'components/Button/Button'
import Ribbon, { RibbonProps } from 'components/Ribbon/Ribbon'
import * as S from './Banner.styles'

export interface BannerProps {
  id: string
  img: {
    url: string
    alternativeText?: string
  }
  title?: string
  description?: string
  buttonLabel?: string
  buttonLink?: string
  ribbon?: RibbonProps
}

const Banner = ({ img, title, description, buttonLabel = 'Buy now', buttonLink, ribbon }: BannerProps) => {
  const caption = title || description || buttonLink

  return (
    <S.Wrapper>
      {ribbon?.label && <Ribbon label={ribbon.label} size={ribbon.size} color={ribbon.color} />}
      <S.Image src={img.url} role='img' aria-label={img.alternativeText || title} />
      {caption && (
        <S.Caption>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description dangerouslySetInnerHTML={{ __html: description }} />}
          {buttonLink && (
            <Button asLink href={buttonLink}>
              {buttonLabel}
            </Button>
          )}
        </S.Caption>
      )}
    </S.Wrapper>
  )
}

export default Banner
