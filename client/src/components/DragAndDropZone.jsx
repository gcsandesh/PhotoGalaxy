import React, { useEffect, useState } from "react"

export default function DragAndDropZone() {
  const [previews, setPreviews] = useState([])
  //   const [files, setFiles] = useState([])
  ////////////////    UPLOAD FILES AT LAST    //////////////////
  function handlePhotosUpload(event) {
    event.preventDefault()

    // let formData = new FormData()
    // files.forEach((file, index) => {
    //   formData.append(`file_${index}`, file)
    // })
    // console.log(formData)
    // let url = `http://localhost:9988/api/photos/`
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((ex) => console.log(ex))
    console.log("photos sent to backend!")
    // event.target.reset()
  }

  ///////////////    SHOWS PREVIEWS WHEN PHOTOS ARE READ    ////////////
  function handleFiles(files) {
    // when files are dropped, files are sent to this function
    // here files is FileList, so converting it to array and iterating
    // ;[...files].forEach(saveFile)
    ;[...files].forEach(previewFile)
    ;[...files].forEach(uploadFile)
  }

  function uploadFile(file) {
    let url = "http://localhost:9988/api/photos"
    let formData = new FormData()

    formData.append("file", file)

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        /* Done. Inform the user */
      })
      .catch(() => {
        console.log("error while fetching!")
        /* Error. Inform the user */
      })
  }

  //   function saveFile(file) {
  //     setFiles((prevFiles) => [...prevFiles, file])
  //   }

  function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviews((prevPreviews) => [...prevPreviews, reader.result])
    }
  }

  ////////////// MAP OVER PREVIEWS ARRAY TO GENERATE PREVIEW ELEMENTS /////////////
  const previewEls = previews.map((preview, index) => (
    <img key={index} src={preview} className="w-44 max-w-full object-contain" />
  ))

  useEffect(() => {
    const dropZone = document.querySelector("#drop-zone")

    //************* TO PREVENT DEFAULT & STOP PROPAGATION **************/
    ;["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropZone.addEventListener(eventName, preventDefaults, false)
    })
    function preventDefaults(e) {
      e.preventDefault()
      e.stopPropagation()
    }

    /////////////// FOR HIGHLIGHTING AND UNHIGHLIGHING //////////////
    ;["dragenter", "dragover"].forEach((eventName) => {
      dropZone.addEventListener(eventName, highlight, false)
    })
    ;["dragleave", "drop"].forEach((eventName) => {
      dropZone.addEventListener(eventName, unhighlight, false)
    })

    function highlight(e) {
      dropZone.classList.add("border-green-500")
    }

    function unhighlight(e) {
      dropZone.classList.remove("border-green-500")
    }

    // ***** when photos are dropped in the area ***** //
    dropZone.addEventListener("drop", handleDrop, false)

    function handleDrop(e) {
      let dt = e.dataTransfer
      let files = dt.files

      handleFiles(files)
    }

    //////////////  REMOVING EVENT LISTENERS  ////////////////
    return () => {
      ;["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        dropZone.removeEventListener(eventName, preventDefaults, false)
      })
      ;["dragenter", "dragover"].forEach((eventName) => {
        dropZone.removeEventListener(eventName, highlight, false)
      })
      ;["dragleave", "drop"].forEach((eventName) => {
        dropZone.removeEventListener(eventName, unhighlight, false)
      })
      dropZone.removeEventListener("drop", handleDrop, false)
    }
  }, [])

  return (
    <div>
      {/* <form action="/upload-photo" method="post" encType="multipart/form-data"> */}
      <form onSubmit={handlePhotosUpload} encType={"multipart/form-data"}>
        <div
          className="border-2 border-dashed p-4 min-h-[350px] flex flex-col items-center justify-center"
          id="drop-zone"
        >
          <input
            className="w-full hidden"
            type={"file"}
            name={"photos"}
            id="photos"
            multiple
            accept={"image/*"}
          />
          <label htmlFor="photos" id="photos">
            Drop photos in the box!
          </label>

          <div className="h-full w-full flex items-center gap-2 flex-wrap object-contain">
            {previewEls}
          </div>
        </div>
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded-md m-2">
          Upload
        </button>
      </form>
    </div>
  )
}
