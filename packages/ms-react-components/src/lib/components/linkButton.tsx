import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button'

interface Params {
  to: string
  type?: Type
  disabled?: boolean
  children?: React.ReactNode
  onClick?: (() => boolean) | (() => Promise<boolean>)
}

type Type = 'success' | 'warning' | 'error'

export default function LinkButton({
  to,
  type = 'success',
  children,
  disabled,
  onClick
}: Params) {
  return (
    <Link
      to={to}
      onClick={(e) => {
        if (onClick && onClick() === false) {
          e.preventDefault() // prevent navigation
        }
      }}
    >
      <Button type={type} disabled={disabled}>
        {children}
      </Button>
    </Link>
  )
}
