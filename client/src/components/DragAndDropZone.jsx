import { Buffer } from 'buffer'
import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function DragAndDropZone() {
  const [files, setFiles] = useState([])
  let url = `http://localhost:9999/api/photos/`

  const onDrop = useCallback((acceptedFiles) => {
    console.log('dropped', acceptedFiles)
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const binaryStr = reader.result

        // photos are saved as array buffer after being read
        setFiles((prevFiles) => [...prevFiles, binaryStr])
      }
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  ////////////////    UPLOAD FILES AT LAST    //////////////////
  async function handlePhotosUpload(event) {
    event.preventDefault()

    const photos = new FormData()
    // console.log('sending', photos)
    files.forEach((file, index) => {
      photos.append(`photo_${index}`, Buffer.from(file).toString('base64'))
    })

    await fetch(url, {
      method: 'POST',
      body: photos,
    })
      .then(() => console.log('sent'))
      .catch(() => console.log('error'))
  }

  const previews = files.map((file) => (
    <Preview b64={Buffer.from(file).toString('base64')} />
  ))

  return (
    <form
      method="POST"
      onSubmit={handlePhotosUpload}
      encType={'multipart/form-data'}
      className="flex flex-col gap2 items-start justify-between"
    >
      <label htmlFor="name">Name</label>
      <input type={'text'} name={'name'} id={'name'} />
      <div
        className=" my-5 flex flex-col gap-2 items-start justify-between border-dashed border-2"
        {...getRootProps()}
      >
        <label htmlFor="photo">Photo</label>
        <input name={'photo'} id={'photo'} {...getRootProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <button type="submit">UPLOAD</button>

      {previews}
    </form>
  )
}

const Preview = ({ b64 }) => {
  return (
    <div>
      <img className=" w-36" src={`data:image/png;base64,${b64}`} />
    </div>
  )
}
