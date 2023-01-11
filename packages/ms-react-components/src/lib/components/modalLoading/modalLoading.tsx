import React from 'react'
import Spinner from '../fileUpload/components/spinner'

interface Params {
  message?: string
}

export default function ModalLoading({ message = 'Please wait...' }: Params) {
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
          className='inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          <div className='px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4'>
            <div className='items-start'>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <h3
                  className='text-lg font-medium leading-6 text-gray-900'
                  id='modal-headline'
                >
                  <div className='flex-wrap sm:flex'>
                    <div className='flex-auto'>{message}</div>
                    <div className='flex-none'>
                      <Spinner />
                    </div>
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
