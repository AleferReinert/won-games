import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightStyles from 'components/Highlight/styles'
import * as GameCardSliderStyles from 'components/GameCardSlider/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    overflow: hidden;

    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${GameCardSliderStyles.Wrapper} {
      ${theme.media().lessThan('hugeLess')`
            margin-right: calc(-${theme.grid.gutter} / 2);
        `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
