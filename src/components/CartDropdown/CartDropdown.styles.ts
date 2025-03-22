import styled, { css } from 'styled-components'
import * as cartItemListStyles from '../CartItemList/CartItemList.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${cartItemListStyles.Wrapper} {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    }

    #desktop {
      display: none;
    }

    #mobile {
      display: block;

      svg {
        color: ${theme.colors.white};
      }
    }

    @media (min-width: ${theme.breakpoint.small}) {
      #desktop {
        display: block;
      }

      #mobile {
        display: none;
      }
    }
  `}
`

export const ButtonCart = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: transparent;

    svg {
      fill: ${theme.colors.white};
    }
  `}
`

export const BadgeCart = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    border-radius: 100%;
    background-color: ${theme.colors.secondary};
    width: 1.6rem;
    height: 1.6rem;
    line-height: 1.6rem;
    color: #fff;
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};
    text-align: center;
  `}
`
