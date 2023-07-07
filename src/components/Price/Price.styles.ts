import styled, { css, DefaultTheme } from 'styled-components'
import { PriceProps } from './Price'

export const priceModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 2.2rem;
    line-height: 2.2rem;
    padding: 0 ${theme.spacings.xxsmall};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    height: 3.8rem;
    line-height: 3.8rem;
    padding: 0 ${theme.spacings.medium};
  `
}

export const Wrapper = styled.div<Pick<PriceProps, 'size'>>`
  ${({ theme, size }) => css`
    display: flex;
    gap: ${size === 'small' ? theme.spacings.xxsmall : theme.spacings.small};

    > div {
      display: inline-flex;
      font-weight: ${theme.font.bold};

      ${!!size && priceModifiers[size](theme)}

      &${OldPrice} {
        padding: 0;
      }
    }
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
  `}
`

export const OldPrice = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
  `}
`
