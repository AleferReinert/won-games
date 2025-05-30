'use client'
import { NetworkStatus, useQuery } from '@apollo/client'
import { Empty } from 'components/Empty/Empty'
import { Product, ProductSkeleton } from 'components/Product/Product'
import { PRODUCTS } from 'graphql/queries/products'
import { useSearchParams } from 'next/navigation'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { ProductsQuery } from 'types/generated'
import { getImageUrl } from 'utils/getImageUrl'
import { queryStringToGraphqlFilters } from 'utils/queryStringToGraphqlFilters'

export const productsLimit = 9

export default function ExplorePage() {
  const searchParams = useSearchParams()
  const query = Object.fromEntries(searchParams.entries())
  const { data, fetchMore, loading, networkStatus } = useQuery<ProductsQuery>(PRODUCTS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: productsLimit,
      ...queryStringToGraphqlFilters({
        queryString: query ?? {}
      })
    }
  })
  const products = data?.products.data || []
  const allProductsLength = data?.products.meta.pagination.total || 0
  const allProductsLoaded = products.length >= allProductsLength
  const hasProducts = products.length > 0
  const showEmpty = !loading && !hasProducts
  const showShowMore = hasProducts && !loading && !allProductsLoaded
  const productsToLoad = NetworkStatus.fetchMore === networkStatus ? allProductsLength - products.length : 3

  const loadMore = () => {
    fetchMore({
      variables: {
        start: products.length,
        limit: productsLimit
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return {
          products: {
            ...fetchMoreResult.products,
            data: [...prev.products.data, ...fetchMoreResult.products.data]
          }
        }
      }
    })
  }

  return (
    <>
      <div
        data-cy='products'
        className='grid gap-6 auto-rows-max md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)]'
      >
        {hasProducts &&
          products.map(({ attributes, id }, index) => {
            const firstThreeProducts = index < 3

            return (
              <Product
                id={id}
                key={id}
                title={attributes.name}
                developer={attributes.developers.data[0]?.attributes.name || ''}
                cover={{
                  url: getImageUrl(attributes.cover.data.attributes.url) || '/img/default/product.webp',
                  alternativeText: attributes.cover.data.attributes.alternativeText
                }}
                imgPriority={firstThreeProducts}
                price={attributes.price}
                slug={attributes.slug}
                promotionalPrice={attributes.promotional_price}
                ribbonLabel={attributes.ribbon_label}
              />
            )
          })}
        {loading &&
          Array.from({ length: productsToLoad }).map((_, index) => {
            return <ProductSkeleton key={index} />
          })}
      </div>

      {showEmpty && (
        <Empty
          title='No results found'
          description="Sorry, we couldn't find any results for your search."
          imgPriority
        />
      )}

      {showShowMore && (
        <button onClick={loadMore} className='group my-8 mx-auto bg-transparent block cursor-pointer'>
          <span className='block uppercase text-zinc-50 font-semibold text-base'>Show more</span>
          <MdOutlineKeyboardArrowDown className='fill-theme-primary inline-flex -mt-[3px] transition-all ease-in-out duration-100 size-6 group-hover:mt-0' />
        </button>
      )}
    </>
  )
}
