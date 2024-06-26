import * as HeadingStyles from 'components/Heading/Heading.styles'
import styled, { css } from 'styled-components'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};

    @media (min-width: ${theme.breakpoint.medium}) {
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    }
  `}
`
export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    @media (min-width: ${theme.breakpoint.medium}) {
      margin-top: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    }

    @media (min-width: ${theme.breakpoint.large}) {
      margin-top: -13rem;
    }
  `}
`
