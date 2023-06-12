import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightStyles from 'components/Highlight/styles'
import * as GameCardSliderStyles from 'components/GameCardSlider/styles'
import media from 'styled-media-query'
import { Container } from 'components/Container'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
            margin-right: calc(-${theme.grid.gutter} / 2);
        `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
