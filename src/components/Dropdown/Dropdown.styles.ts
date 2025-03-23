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
  $state: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ $state }) => css`
    display: inline-block;
    position: relative;

    ${Children},
    ${Overlay} {
      ${$state && wrapperModifiers.open()}
      ${!$state && wrapperModifiers.close()}
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.semibold};
    font-size: ${theme.font.sizes.medium};
    background: transparent;
    position: relative;
    z-index: ${theme.layers.modal};
  `}
`

export const Children = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position: absolute;
    top: 100%;
    right: -0.9rem;
    margin-top: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    transition: ${theme.transition.default};
    width: max-content;
    ${wrapperModifiers.close()}
    z-index: ${theme.layers.modal};

    &:before {
      display: block;
      content: '';
      border: 1rem solid transparent;
      border-bottom-color: ${theme.colors.white};
      position: absolute;
      top: -2rem;
      right: 1rem;
    }
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.25);
    z-index: ${theme.layers.overlay};
    cursor: default !important;
  `}
`
