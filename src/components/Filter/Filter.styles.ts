import * as checkboxStyles from 'components/Checkbox/Checkbox.styles'
import * as headingStyles from 'components/Heading/Heading.styles'
import * as radioStyles from 'components/Radio/Radio.styles'
import styled, { css } from 'styled-components'

export const OpenFilter = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    background: transparent;
    margin-bottom: ${theme.spacings.small};

    svg {
      fill: ${theme.colors.white};
      width: 2.4rem;
      height: 2.4rem;
    }

    @media (min-width: ${theme.breakpoint.medium}) {
      display: none;
    }
  `}
`
type WrapperProps = {
  isOpen: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: all;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.white};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    bottom: calc((${theme.spacings.small} * 2) + 5rem);
    transition: opacity ${theme.transition.default};
    display: grid;
    grid-template-rows: max-content auto max-content;
    z-index: ${theme.layers.menu};

    ${checkboxStyles.Wrapper},
    ${radioStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${isOpen && wrapperModifiers.open()}
    ${!isOpen && wrapperModifiers.close()}

    @media (min-width: ${theme.breakpoint.medium}) {
      ${wrapperModifiers.open()}
      position: static;
      background-color: transparent;

      ${headingStyles.Wrapper},
      ${checkboxStyles.Label},
      ${radioStyles.Label} {
        color: ${theme.colors.white};
      }

      ${headingStyles.Wrapper} {
        ${headingStyles.sizeModifiers.large(theme)}
        ${headingStyles.lineModifiers.small()}
      }
    }
  `}
`

export const CloseFilter = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    background: transparent;
    display: flex;
    margin-left: auto;
    padding: ${theme.spacings.xsmall};

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    @media (min-width: ${theme.breakpoint.medium}) {
      display: none;
    }
  `}
`

export const Items = styled.div`
  ${({ theme }) => css`
    overflow-y: auto;
    padding: 0 ${theme.spacings.small};

    @media (min-width: ${theme.breakpoint.medium}) {
      overflow-y: initial;
    }
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    padding-bottom: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};

    &:last-child {
      border: 0;
      padding-bottom: 0;
    }

    @media (min-width: ${theme.breakpoint.medium}) {
      border-bottom-color: ${theme.colors.darkGray};
    }
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: ${theme.spacings.small};
    box-shadow: 0 -0.2rem 0.4rem 0 rgba(3, 5, 23, 0.1);
    background-color: ${theme.colors.white};

    @media (min-width: ${theme.breakpoint.medium}) {
      display: none;
      /* position: static;
      background-color: transparent; */
    }
  `}
`
