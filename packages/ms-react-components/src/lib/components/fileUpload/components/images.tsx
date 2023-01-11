import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Image } from '../../../types'

interface Params {
  images: Array<Image>
  onRemoveImage(fileId: string): any
}

interface ImageWithPreview extends Image {
  previewUrl: string
}

export default function Images({ images, onRemoveImage }: Params) {
  const [imagesWithPreview, setImagesWithPreview] = useState<
    Array<ImageWithPreview>
  >([])

  useEffect(() => {
    const imgs: Array<ImageWithPreview> = []

    for (var i = 0; i < images.length; i++) {
      const { file } = images[i]
      imgs.push({
        file,
        previewUrl: URL.createObjectURL(file)
      })
    }
    setImagesWithPreview(imgs)

    return () => {
      imgs.map((img) => URL.revokeObjectURL(img.previewUrl))
    }
  }, [images])

  let elements: Array<JSX.Element> = []
  for (let i = 0; i < imagesWithPreview.length; i++) {
    const { file, previewUrl } = imagesWithPreview[i]

    elements.push(
      <div key={i} className='fadein'>
        <div
          onClick={() => onRemoveImage(file.name + file.lastModified)}
          className='delete'
        >
          <FontAwesomeIcon icon={faTimesCircle} size='2x' />
        </div>
        <img src={previewUrl} alt='' />
      </div>
    )
  }

  return <div className='images'>{elements}</div>
}
