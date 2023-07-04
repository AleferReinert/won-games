import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/tests/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    div.slick-track {
      display: flex;
    }

    div.slick-list {
      margin: 0 -${theme.spacings.xxsmall};
      display: flex;
      overflow: visible;

      ${cssMediaQuery.greaterThan(theme.breakpoint.xlarge)} {
        overflow: hidden;
      }
    }

    .slick-arrow {
      height: 1.8rem;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      cursor: pointer;
      color: ${theme.colors.white};

      &.slick-disabled {
        display: none !important;
      }
    }

    .slick-prev {
      left: calc(-${theme.spacings.large} - 1.5rem);
    }

    .slick-next {
      right: calc(-${theme.spacings.large} - 1.5rem);
    }

    .slick-slide {
      aspect-ratio: 16/9;

      > div {
        margin: 0 ${theme.spacings.xxsmall};
        flex: 1 0 auto;
        height: 100%;
        position: relative;
      }
    }
  `}
`

export const Thumb = styled.button`
  cursor: pointer;
`

export const Modal = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    transition: opacity ${theme.transition.default};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    padding: ${theme.spacings.small};

    div.slick-list {
      overflow: hidden;
    }

    // Hidden modal
    &[aria-hidden='true'] {
      opacity: 0;
      pointer-events: none;
    }

    // Visible modal
    &[aria-hidden='false'] {
      opacity: 1;
    }
  `}
`

export const CloseModal = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: ${theme.spacings.xxsmall};
    text-align: right;
    color: ${theme.colors.white};

    svg {
      cursor: pointer;
      width: 2rem;
    }
  `}
`

export const ContentModal = styled.div`
  ${({ theme }) => css`
    aspect-ratio: 16/9;
    max-width: 80%;
    max-height: 100%;

    ${cssMediaQuery.greaterThan(theme.breakpoint.xlarge)} {
      max-width: ${theme.grid.container};
    }
  `}
`
