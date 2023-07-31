import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/Heading.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      @media (max-width: calc(${theme.breakpoint.small} -1px)) {
        display: none;
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.large};

    @media (min-width: ${theme.breakpoint.small}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${theme.breakpoint.medium}) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: ${theme.breakpoint.large}) {
      grid-template-columns: repeat(6, 1fr);
    }
  `}
`

export const Block = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const IconsWrapper = styled.span`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    color: ${theme.colors.white};

    @media (min-width: ${theme.breakpoint.small}) {
      gap: ${theme.spacings.small};
    }
  `}
`

export const Icon = styled.span`
  width: 2rem;
`
