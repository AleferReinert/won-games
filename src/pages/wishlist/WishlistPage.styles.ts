import styled, { css } from 'styled-components'

export const WrapperWishlist = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: grid;
    gap: ${theme.spacings.small};

    @media (min-width: ${theme.breakpoint.small}) {
      margin-top: ${theme.spacings.medium};
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${theme.breakpoint.medium}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: ${theme.breakpoint.large}) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`
