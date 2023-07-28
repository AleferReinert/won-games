import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as HighlightStyles from 'components/Highlight/Highlight.styles'
import * as ProductSliderStyles from 'components/ProductSlider/ProductSlider.styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${ProductSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${ProductSliderStyles.Wrapper} {
      margin-right: calc(-${theme.grid.gutter} / 2);

      ${cssMediaQuery.greaterThan(theme.breakpoint.xlarge)} {
        margin-right: 0;
      }
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
