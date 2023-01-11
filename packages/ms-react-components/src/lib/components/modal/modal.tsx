import React from 'react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Variant } from '../../types'
import Buttons, { ButtonType } from './components/buttons'
import Icon from './components/icon'

interface Params {
  type?: Variant
  icon?: IconDefinition
  title: string
  buttons: Array<ButtonType>
  children?: React.ReactNode
  onButtonClick(buttonId: string): any
}

export default function Modal({
  type = 'success',
  icon,
  title,
  children,
  buttons,
  onButtonClick
}: Params) {
  return (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>

        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>
        <div
          className='inline-block w-full max-w-sm overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          <div className='px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-start'>
              {icon ? <Icon type={type} icon={icon} /> : ''}
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <h3
                  className='text-lg font-medium leading-6 text-gray-900'
                  id='modal-headline'
                >
                  {title}
                </h3>
                <div className='mt-2'>
                  <div className='text-sm text-gray-500'>{children}</div>
                </div>
              </div>
            </div>
          </div>
          <Buttons
            type={type}
            buttons={buttons}
            onButtonClick={onButtonClick}
          />
        </div>
      </div>
    </div>
  )
}
