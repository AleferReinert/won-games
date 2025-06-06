export const getStrapiMedia = (url: string) => {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${process.env.NEXT_PUBLIC_API_URL}${url}`
}
