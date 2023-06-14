import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-position: top center;
    background-size: cover;
    width: 100%;
    height: 40rem;
    position: absolute;
    top: 0;

    &::after {
      content: '';
      display: block;
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    ${media.greaterThan('medium')`
        height: 70rem;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`
