import { AddShoppingCart, RemoveShoppingCart } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button/Button'
import { useCart } from 'hooks/useCart'

interface AddToCartButtonProps extends ButtonProps {
  id: string
  showLabel?: boolean
}

const AddToCartButton = ({ id, showLabel = false, ...rest }: AddToCartButtonProps) => {
  const { addToCart, removeFromCart, isInCart } = useCart()

  return (
    <div data-testid='AddToCartButtonComponent'>
      {isInCart(id) ? (
        <Button {...rest} title='Remove from cart' aria-label='Remove from cart' onClick={() => removeFromCart(id)}>
          <RemoveShoppingCart role='img' aria-hidden />
          {showLabel && 'Remove from cart'}
        </Button>
      ) : (
        <Button {...rest} title='Add to cart' aria-label='Add to cart' onClick={() => addToCart(id)}>
          <AddShoppingCart role='img' aria-hidden />
          {showLabel && 'Add to cart'}
        </Button>
      )}
    </div>
  )
}

export default AddToCartButton
