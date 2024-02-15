import styled, { css } from 'styled-components'

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-0.6rem);
  `
}

type WrapperProps = {
  state?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ state }) => css`
    display: inline-block;
    position: relative;

    ${Content} {
      ${state && wrapperModifiers.open()}
      ${!state && wrapperModifiers.close()}
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.semibold};
    font-size: ${theme.font.sizes.medium};
    background: transparent;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    transition: ${theme.transition.default};
    ${wrapperModifiers.close()}

    &:before {
      display: block;
      content: '';
      border: 1.2rem solid transparent;
      border-bottom-color: ${theme.colors.white};
      position: absolute;
      top: -2.4rem;
      right: 2rem;
    }
  `}
`
