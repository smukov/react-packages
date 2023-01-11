import React from 'react'
import { Variant } from '../../../types'

interface Params {
  type?: Variant
  buttons: Array<ButtonType>
  onButtonClick(buttonId: string): any
}

export type ButtonType = {
  id: string
  label: string
}

export default function Buttons({
  type = 'success',
  buttons,
  onButtonClick
}: Params) {
  function getPrimaryButtonColors() {
    switch (type) {
      case 'success':
        return 'btn-success'
      case 'warning':
        return 'btn-warning'
      default:
        return 'btn-error'
    }
  }

  function getButtonCss(index: number, length: number) {
    if (index === length - 1) {
      return getPrimaryButtonColors()
    } else {
      return 'btn-light sm:w-auto'
    }
  }

  return (
    <div className='px-4 py-3 space-y-2 text-right bg-gray-50 sm:px-6 sm:flex sm:justify-end sm:space-y-0 sm:space-x-2'>
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(btn.id)}
          type='button'
          className={`btn ${getButtonCss(index, buttons.length)} `}
        >
          {btn.label}
        </button>
      ))}{' '}
    </div>
  )
}
