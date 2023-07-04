import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as HighlightStyles from 'components/Highlight/Highlight.styles'
import * as GameCardSliderStyles from 'components/GameCardSlider/GameCardSlider.styles'
import { cssMediaQuery } from 'utils/tests/helpers'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${GameCardSliderStyles.Wrapper} {
      margin-right: calc(-${theme.grid.gutter} / 2);

      ${cssMediaQuery.greaterThan(theme.breakpoint.xlarge)} {
        margin-right: 0;
      }
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
