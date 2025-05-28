'use client'
import { Button, ButtonProps } from 'components/Button/Button'
import { useCart } from 'hooks/useCart'
import { ComponentProps } from 'react'
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md'

interface AddToCartButtonProps extends Omit<ButtonProps, 'children'>, ComponentProps<'button'> {
  id: string
  showLabel?: boolean
}

export const AddToCartButton = ({ id, showLabel = false, ...rest }: AddToCartButtonProps) => {
  const { addToCart, removeFromCart, isInCart } = useCart()

  return (
    <div data-testid='AddToCartButtonComponent'>
      {isInCart(id) ? (
        <Button {...rest} title='Remove from cart' aria-label='Remove from cart' onClick={() => removeFromCart(id)}>
          <MdOutlineRemoveShoppingCart role='img' aria-hidden />
          {showLabel && 'Remove from cart'}
        </Button>
      ) : (
        <Button {...rest} title='Add to cart' aria-label='Add to cart' onClick={() => addToCart(id)}>
          <MdAddShoppingCart role='img' aria-hidden />
          {showLabel && 'Add to cart'}
        </Button>
      )}
    </div>
  )
}
