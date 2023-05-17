import React, { useCallback } from "react"
import { HiTrash } from "react-icons/hi"
import { GrAdd } from "react-icons/gr"

const AddPhotoForm = () => {
  const [file, setFile] = React.useState([])

  const handleFileChange = useCallback((event) => {
    const acceptedFile = event.target.files[0]
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(acceptedFile)
      reader.read
      reader.onabort = (msg) => reject(msg)
      reader.onerror = (error) => reject(error)
      reader.onload = (data) => {
        resolve(data.target.result)
      }
    }).then((base64image) => setFile((prevFile) => [...prevFile, base64image]))
  }, [])

  const handleFileRemove = useCallback(() => {
    setFile([])
  }, [])

  console.log(file)

  return (
      <div className="flex gap-6 items-start justify-between">
      <div className="w-1/12">
        {!file.length && (
          <label
            htmlFor="file-input"
            className="border-2 hover:bg-gray-100 bg-gray-300 group p-8 inline-block rounded-lg shadow-sm hover:shadow-lg duration-300 cursor-pointer"
          >
            <input
              type="file"
              id="file-input"
              className="hidden"
              onChange={handleFileChange}
            />
            <GrAdd size={44} />
          </label>
        )}
      </div>

      {!!file.length && (
        <div className="w-9/12">
          <img src={file} alt="user uploaded file" />
        </div>
      )}

      {!!file.length && (
        <div className="w-1/12">
          <button
            className="text-red-300 hover:text-red-500 hover:bg-red-300 active:bg-red-500 border-2 p-8 inline-block rounded-full shadow-sm hover:shadow-lg duration-300 cursor-pointer"
            onClick={handleFileRemove}
          >
            <HiTrash size={36} className="" />
          </button>
        </div>
      )}
    </div>
  )
}

export default AddPhotoForm
