import React from 'react'

interface Params {
  type?: Type
  disabled?: boolean
  children?: React.ReactNode
  onClick?: (() => boolean) | (() => Promise<boolean>)
}

type Type = 'success' | 'warning' | 'error'

export default function Button({
  type = 'success',
  disabled,
  children,
  onClick
}: Params) {
  return (
    <button
      className={`btn btn-${type} max-w-max`}
      disabled={disabled}
      onClick={(e) => {
        if (onClick && onClick() === false) {
          e.preventDefault() // prevent navigation
        }
      }}
    >
      {children}
    </button>
  )
}
