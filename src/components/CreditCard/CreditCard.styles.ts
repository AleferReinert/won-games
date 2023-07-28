import styled, { css } from 'styled-components'
import { CreditCardProps } from './CreditCard'

const wrapperModifiers = {
  left: () => css`
    flex-direction: row;
  `,
  right: () => css`
    flex-direction: row-reverse;
  `
}

export const Wrapper = styled.div<Pick<CreditCardProps, 'color' | 'direction'>>`
  ${({ theme, color, direction }) => css`
    display: inline-flex;
    gap: ${theme.spacings.xxsmall};
    align-items: center;
    color: ${theme.colors[color!]};

    ${!!direction && wrapperModifiers[direction]()}
  `}
`

export const Number = styled.div``
