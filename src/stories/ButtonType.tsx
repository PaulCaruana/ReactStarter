import React from 'react'
import Link, { LinkProps } from 'next/link'
import { HTMLAttributes } from 'react'
import cn from 'classnames'
import { UrlObject } from 'url'
import Box from '~/components/Box'
import { Button } from '@material-ui/core'

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  href: string
  isVariant?: boolean
}

export const ButtonType: React.FC<ButtonProps> = ({ href, children, isVariant, ...rest }) => {
  console.log(JSON.stringify(rest, null, 2))
  return (
    <div className={`inline-flex ${!isVariant ? 'rounded-md shadow' : ''}`} {...rest}>
      <Link href={href} prefetch={false}>
        <a
          className={cn(
            'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out',
            { 'text-white bg-indigo-600 hover:bg-indigo-500': !isVariant },
            {
              'text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:border-indigo-300': isVariant,
            },
          )}
        >
          {children}
        </a>
      </Link>
      <Box>Im a box</Box>
      <Button variant="contained" color="primary" onClick={() => void 0}>
        Set Light Theme
      </Button>
    </div>
  )
}
