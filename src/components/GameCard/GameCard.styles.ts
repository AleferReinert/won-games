import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.div`
  height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
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
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
  `}
`

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`

export const FavButton = styled.button`
  ${({ theme }) => css`
    width: 2rem;
    background: transparent;
    border: 0;
    color: ${theme.colors.primary};
    position: absolute;
    right: ${theme.spacings.xsmall};
    cursor: pointer;
    top: 1.2rem;
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
    gap: calc(${theme.spacings.xxsmall} / 2);
  `}
`
