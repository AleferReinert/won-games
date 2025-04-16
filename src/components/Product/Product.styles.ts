import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
    flex-direction: column;

    > a {
      color: ${theme.colors.gray};
      text-decoration: none;

      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: italic;
      }
    }
  `}
`

export const ImageBox = styled.div`
  height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
`

export const Info = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    display: flex;
    justify-content: space-between;

    button {
      padding: 0;
      height: min-content;
      transform: translate(0.1rem, -0.1rem);

      &:disabled {
        background: transparent;
      }
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
    gap: calc(${theme.spacings.xxsmall} / 2);

    button svg {
      transform: scale(0.8);
      width: 2rem;
      height: 2rem;
    }
  `}
`
