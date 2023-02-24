import React, { useEffect } from "react"

export default function DragAndDropZone() {
  function handlePhotosUpload(event) {
    event.preventDefault()
    console.log("photos sent to backend!")
    event.target.reset()
  }
  function handleFiles(files) {
    // event.preventDefault()
    console.log(files)
  }

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
        <div className="border-2 border-dashed h-96 p-4" id="drop-zone">
          <input
            className="w-full "
            type={"file"}
            name={"photos"}
            id="photos"
            multiple
            accept={"image/*"}
          />
          <label htmlFor="photos" id="photos">
            Drop photos in the box!
          </label>
        </div>
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded-md m-2">
          Upload
        </button>
      </form>
    </div>
  )
}
