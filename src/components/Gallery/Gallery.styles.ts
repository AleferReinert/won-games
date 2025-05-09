import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    div.slick-track {
      display: flex;
    }

    div.slick-list {
      margin: 0 -${theme.spacings.xxsmall};
      display: flex;
      overflow: visible;

      @media (min-width: ${theme.breakpoint.xlarge}) {
        overflow: hidden;
      }
    }

    .slick-arrow {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      cursor: pointer;
      fill: ${theme.colors.white};

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
  position: relative;
  height: 190px;
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
    right: 0;
    padding: ${theme.spacings.xxsmall};
    text-align: right;
    color: ${theme.colors.white};
    z-index: ${theme.layers.overlay};

    svg {
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      fill: ${theme.colors.white};
    }
  `}
`

export const ContentModal = styled.div`
  ${({ theme }) => css`
    aspect-ratio: 16/9;
    max-width: 80%;
    max-height: 100%;

    @media (min-width: ${theme.breakpoint.xlarge}) {
      max-width: ${theme.grid.container};
    }
  `}
`
