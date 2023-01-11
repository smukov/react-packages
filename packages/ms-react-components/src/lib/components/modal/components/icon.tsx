import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Variant } from '../../../types'

interface Params {
  type?: Variant
  icon: IconDefinition
}

export default function Icon({ type = 'success', icon }: Params) {
  function getIconColor() {
    switch (type) {
      case 'success':
        return 'text-green-600'
      case 'warning':
        return 'text-yellow-700'
      default:
        return 'text-red-600'
    }
  }

  function getIconBackgroundColor() {
    switch (type) {
      case 'success':
        return 'bg-green-100'
      case 'warning':
        return 'bg-yellow-100'
      default:
        return 'bg-red-100'
    }
  }

  return (
    <div
      className={`${getIconBackgroundColor()} flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto  rounded-full sm:mx-0 sm:h-10 sm:w-10`}
    >
      <FontAwesomeIcon icon={icon} className={getIconColor()} />
    </div>
  )
}
