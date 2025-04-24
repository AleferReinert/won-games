import { FetchResult } from '@apollo/client'
import { createContext } from 'react'
import { ProductEntity } from 'types/generated'

export interface WishlistContextProps {
  products: ProductEntity[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => Promise<FetchResult<void>>
  removeFromWishlist: (id: string) => Promise<void | FetchResult<void>>
  loading: boolean
}

export const WishlistContextDefaultValues = {
  products: [],
  isInWishlist: () => false,
  addToWishlist: () => Promise.resolve({} as FetchResult<void>),
  removeFromWishlist: () => Promise.resolve({} as FetchResult<void>),
  loading: true
}

export const WishlistContext = createContext<WishlistContextProps>(WishlistContextDefaultValues)
