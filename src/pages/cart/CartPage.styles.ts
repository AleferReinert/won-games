import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: grid;
    gap: ${theme.spacings.medium};

    @media (min-width: ${theme.breakpoint.medium}) {
      gap: ${theme.spacings.xsmall};
      grid-template-columns: auto 39rem;
    }
  `}
`

export const Info = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.large};

    svg {
      fill: ${theme.colors.primary};
      margin-right: ${theme.spacings.xxsmall};
    }

    a {
      color: ${theme.colors.primary};
    }
  `}
`
