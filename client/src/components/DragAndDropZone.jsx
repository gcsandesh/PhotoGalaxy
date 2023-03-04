import { Buffer } from "buffer"
import React, { useState, useCallback, useMemo } from "react"
import { useDropzone } from "react-dropzone"

// ////// STYLES ////// //

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#000",
  // borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
}

const focusedStyle = {
  borderColor: "#2196f3",
}

const acceptStyle = {
  borderColor: "#00e676",
}

const rejectStyle = {
  borderColor: "#ff1744",
}

export default function DragAndDropZone() {
  console.log()
  const [files, setFiles] = useState([])
  let url = `http://localhost:9999/api/photos/`

  /////////////   WHEN FILES ARE DROPPED    //////////////
  const onDrop = useCallback((acceptedFiles) => {
    console.log("dropped", acceptedFiles)
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onabort = () => console.log("file reading was aborted")
      reader.onerror = () => console.log("file reading has failed")
      reader.onload = () => {
        const binaryStr = reader.result

        // photos are saved as array buffer after being read
        setFiles((prevFiles) => [...prevFiles, binaryStr])
      }
    })
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: { "image/*": [] }, maxFiles: 10 })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  )

  ////////////////    UPLOAD FILES AT LAST    //////////////////
  async function handlePhotosUpload(event) {
    event.preventDefault()

    const photos = new FormData()
    // console.log('sending', photos)
    files.forEach((file, index) => {
      photos.append(`photo_${index}`, Buffer.from(file).toString("base64"))
    })

    await fetch(url, {
      method: "POST",
      body: photos,
      headers: {
        Authorization: "Bearer " + "",
      },
    })
      .then(() => console.log("sent"))
      .catch(() => console.log("error"))
  }

  const previews = files.map((file, index) => (
    <Preview key={index} b64={Buffer.from(file).toString("base64")} />
  ))

  return (
    <div>
      {/* <form
        method="POST"
        onSubmit={handlePhotosUpload}
        encType={"multipart/form-data"}
        className="flex flex-col gap2 items-start justify-between w-2/3 mx-auto"
      > */}
      <div {...getRootProps({ style })}>
        {/* <label htmlFor="photo">Photo</label> */}
        <input name={"photo"} id={"photo"} {...getRootProps()} hidden />
        {isDragActive ? (
          <p className="text-green-500">
            Drag 'n' drop up to 10 files here, or click to select files
          </p>
        ) : (
          <p>Drag 'n' drop up to 10 files here, or click to select files</p>
        )}
      </div>

      {/* </form> */}
      <div>
        {previews}
        <button
          type="submit"
          className="mx-auto text-white bg-blue-500 hover:bg-blue-700 font-bold px-2 py-2 sm:py-1 rounded focus:outline-none"
        >
          UPLOAD
        </button>
      </div>
    </div>
  )
}

const Preview = ({ b64 }) => {
  return (
    <div>
      <img className=" w-36" src={`data:image/png;base64,${b64}`} />
    </div>
  )
}
