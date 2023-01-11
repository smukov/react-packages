import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

interface Params {
  onChange(images: FileList | undefined): any
}

export default function button({ onChange }: Params) {
  return (
    <div className='buttons'>
      <div className='button'>
        <label htmlFor='single'>
          <FontAwesomeIcon icon={faImage} color='#6d84b4' size='4x' />
        </label>
        <input
          type='file'
          id='single'
          onChange={(e) =>
            onChange(e.target.files === null ? undefined : e.target.files)
          }
          accept='image/png, image/jpeg'
        />
      </div>
    </div>
  )
}
