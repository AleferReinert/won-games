import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'
import * as HeadingStyles from 'components/Heading/Heading.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.white};
      margin: ${theme.spacings.xsmall} 0;
      ${HeadingStyles.lineModifiers.left(theme, 'secondary')};

      ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
        color: ${theme.colors.black};
      }
    }

    h1 {
      font-size: ${theme.font.sizes.xxlarge};
    }
    h2 {
      font-size: ${theme.font.sizes.xlarge};
    }
    h3 {
      font-size: ${theme.font.sizes.large};
    }
    h4 {
      font-size: ${theme.font.sizes.medium};
    }
    h5 {
      font-size: ${theme.font.sizes.small};
    }
    h6 {
      font-size: ${theme.font.sizes.xsmall};
    }

    p {
      margin-bottom: ${theme.spacings.xsmall};
    }

    a {
      color: ${theme.colors.primary};
    }

    img {
      max-width: 100%;
      margin-bottom: ${theme.spacings.xsmall};
    }

    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }

    hr {
      margin: ${theme.spacings.small} 0;
      border: 0;
      height: 1px;
      background-color: ${theme.colors.darkGray};
    }

    .description__copyrights {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
      margin-top: ${theme.spacings.small};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      background-color: ${theme.colors.white};
      padding: ${theme.spacings.large};
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};

      hr {
        background-color: ${theme.colors.lightGray};
      }
    }
  `}
`
