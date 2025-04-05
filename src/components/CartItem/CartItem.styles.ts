import * as CreditCardsStyles from 'components/CreditCard/CreditCard.styles'
import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { CartItemProps } from './CartItem'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    list-style: none;
    cursor: default;
  `}
`

export const Content = styled.div<Pick<CartItemProps, 'paymentInfo'>>`
  ${({ theme, paymentInfo }) => css`
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: auto auto;
    column-gap: ${theme.spacings.xxsmall};

    @media (min-width: ${theme.breakpoint.xsmall}) {
      column-gap: ${theme.spacings.xsmall};
    }

    @media (min-width: ${theme.breakpoint.small}) {
      grid-template-columns: ${paymentInfo ? 'min-content 1fr 1fr' : 'min-content 1fr'};
      grid-template-rows: none;
      column-gap: ${theme.spacings.small};
    }
  `}
`

export const Img = styled(Image)`
  max-width: 9.4rem;
  height: calc(9.4rem * (9 / 16));
  aspect-ratio: 16/9;
`

export const InfoWrapper = styled.div`
  overflow: hidden;
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    line-height: 2.4rem;
    margin-bottom: 0.2rem;
    transform: translateY(-0.4rem);
    display: flex;
    gap: ${theme.spacings.xxsmall};
    justify-content: space-between;

    @media (min-width: ${theme.breakpoint.small}) {
      justify-content: start;
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`

export const Group = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacings.small};
  `}
`

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    align-items: center;

    svg {
      fill: ${theme.colors.primary};
    }
  `}
`

export const ButtonRemove = styled.button`
  width: 2.4rem;
  height: 2.4rem;
`

export const DownloadLink = styled(Link)`
  ${({ theme }) => css`
    fill: ${theme.colors.primary};
    display: inline-flex;
    width: 2.4rem;
    transform: translateY(0.2rem);
  `}
`

export const PaymentInfo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    line-height: 1;
    grid-column: 1/3;
    display: flex;
    max-width: fit-content;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xsmall};
    justify-self: end;

    @media (min-width: ${theme.breakpoint.small}) {
      margin-top: 0;
      grid-column: 3;
      text-align: right;
      flex-direction: column-reverse;
      gap: 0;
      justify-content: space-between;

      ${CreditCardsStyles.Wrapper} {
        ${CreditCardsStyles.wrapperModifiers.right()}
      }
    }
  `}
`

export const PurchaseDate = styled.div``
