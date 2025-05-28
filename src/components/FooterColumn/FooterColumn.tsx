import { Heading } from 'components/Heading/Heading'
import { ReactNode } from 'react'

interface FooterColumnProps {
  title: string
  children: ReactNode
}

export const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div aria-labelledby='resources'>
      <Heading color='black' size='medium' line='bottom' lineColor='secondary' className='uppercase'>
        {title}
      </Heading>
      <div
        className='
				[&_span]:block [&_span]:text-theme-gray-800 [&_span]:no-underline [&_span]:mb-2 [&_span]:text-sm 
				[&_a]:block [&_a]:text-theme-gray-800 [&_a]:no-underline [&_a]:mb-2 [&_a]:text-sm 
				[&_a]:hover:underline'
      >
        {children}
      </div>
    </div>
  )
}
