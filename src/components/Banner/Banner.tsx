import Button from 'components/Button/Button'
import Ribbon, { RibbonProps } from 'components/Ribbon/Ribbon'
import Image from 'next/image'
import * as S from './Banner.styles'

export interface BannerProps {
  id: string
  img: {
    url: string
    alternativeText: string
  }
  title?: string
  description?: string
  buttonLabel?: string
  buttonUrl?: string
  ribbon?: RibbonProps
}

const Banner = ({ img, title, description, buttonLabel = 'Buy now', buttonUrl, ribbon }: BannerProps) => {
  const caption = title || description || buttonUrl

  return (
    <S.Wrapper>
      {ribbon?.label && <Ribbon label={ribbon.label} size={ribbon.size} color={ribbon.color} />}

      <S.ImageWrapper>
        <Image priority src={img.url} alt={img.alternativeText || 'Decorative image'} fill />
      </S.ImageWrapper>

      {caption && (
        <S.Caption>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description dangerouslySetInnerHTML={{ __html: description }} />}
          {buttonUrl && (
            <Button asLink href={buttonUrl}>
              {buttonLabel}
            </Button>
          )}
        </S.Caption>
      )}
    </S.Wrapper>
  )
}

export default Banner
