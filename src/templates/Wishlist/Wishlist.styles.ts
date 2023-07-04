import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'

export const WrapperWishlistGames = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: grid;
    gap: ${theme.spacings.small};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      margin-top: ${theme.spacings.medium};
      grid-template-columns: repeat(2, 1fr);
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.medium)} {
      grid-template-columns: repeat(3, 1fr);
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.large)} {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`
