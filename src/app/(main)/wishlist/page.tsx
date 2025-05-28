'use client'
import { Empty } from 'components/Empty/Empty'
import { Product } from 'components/Product/Product'
import { Skeleton } from 'components/Skeleton/Skeleton'
import { useWishlist } from 'hooks/useWishlist'
import { productMapper } from 'utils/mappers'

export default function WishlistPage() {
  const { products, loading } = useWishlist()
  const wishlistProducts = productMapper({ data: products })

  return (
    <div data-testid='WishlistPage'>
      <div
        aria-label='wishlist products'
        className='mt-6 grid gap-6 md:mt-8 md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] xl:grid-cols-[repeat(4,_1fr)]'
      >
        {loading ? (
          <Skeleton className='w-full h-[235px] md:h-[258px]' />
        ) : (
          wishlistProducts.map((product) => {
            return (
              <Product
                key={'wishlist-' + product.id}
                id={product.id}
                title={product.title}
                developer={product.developer}
                cover={product.cover}
                price={product.price}
                slug={product.slug}
              />
            )
          })
        )}
      </div>

      {!loading && products.length === 0 && (
        <Empty
          title='Your wishlist is empty'
          description='Games added to your wishlist will appear here.'
          imgPriority
        />
      )}
    </div>
  )
}
