import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as HighlightStyles from 'components/Highlight/Highlight.styles'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};

    ${cssMediaQuery.greaterThan(theme.breakpoint.medium)} {
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    }
  `}
`
export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${cssMediaQuery.greaterThan(theme.breakpoint.medium)} {
      margin-top: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.large)} {
      margin-top: -13rem;
    }
  `}
`

export const SectionComingSoon = styled.div`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`
