import React from 'react'
import Button from './components/button'
import Images from './components/images'
import { Image } from '../../types'

interface Params {
  images: Array<Image>
  onChange(images: Array<Image>): any
}

export default function FileUpload({ images, onChange }: Params) {
  function uploadButton() {
    return (
      <Button
        onChange={(files) => {
          if (files === undefined) {
            onChange([])
          } else {
            const newImages: Array<Image> = []
            for (let i = 0; i < files.length; i++) {
              const imageFile = files[i]
              newImages.push({
                file: imageFile
              })
            }
            onChange(newImages)
          }
        }}
      />
    )
  }

  function imagePreview() {
    return (
      <Images
        images={images}
        onRemoveImage={(fileIdToRemove) => {
          const newImages: Array<Image> = []
          for (let i = 0; i < images.length; i++) {
            const image = images[i]
            const { file } = image
            const fileId = file.name + file.lastModified
            if (fileId !== fileIdToRemove) {
              newImages.push(image)
            }
          }
          onChange(newImages)
        }}
      />
    )
  }

  function content() {
    if (images.length === 0) {
      return uploadButton()
    } else {
      return imagePreview()
    }
  }

  return <div className='fileUpload'>{content()}</div>
}
