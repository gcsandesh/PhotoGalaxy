// import React, { useState, useCallback, useMemo } from "react"
// import { useDropzone } from "react-dropzone"
// import { toast } from "react-hot-toast"
// import { FaRegTimesCircle } from "react-icons/fa"
// import { useSelector } from "react-redux"
// import { UPLOAD_PHOTOS } from "../constants"

// // ////// STYLES ////// //

// const baseStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "20px",
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: "#000",
//   // borderColor: "#eeeeee",
//   borderStyle: "dashed",
//   backgroundColor: "#fafafa",
//   color: "#bdbdbd",
//   outline: "none",
//   transition: "border .24s ease-in-out",
// }

// const focusedStyle = {
//   borderColor: "#2196f3",
// }

// const acceptStyle = {
//   borderColor: "#00e676",
// }

// const rejectStyle = {
//   borderColor: "#ff1744",
// }

// export default function DragAndDropZone() {
//   const [files, setFiles] = useState([])

//   const {
//     user: { accessToken },
//   } = useSelector((store) => store.userAuth)

//   function removeFile(fileID) {
//     setFiles((prevFiles) => prevFiles.filter((file, index) => index !== fileID))
//   }

//   ////////////////    UPLOAD FILES AT LAST    //////////////////
//   async function handlePhotosUpload(event) {
//     event.preventDefault()
//     if (!files.length) {
//       return toast.error("No photos to upload!")
//     }

//     // const reqBody = { photos: files }
//     // console.log("body:", reqBody)

//     // // uploading image on clicking submit button
//     await fetch(UPLOAD_PHOTOS, {
//       method: "POST",
//       body: JSON.stringify({ photos: files }),
//       headers: {
//         Authorization: "Bearer " + accessToken,
//         "Content-Type": "application/json",
//       },
//     })
//       .then(() => {
//         toast.success("Uploaded Successfully!")
//         setFiles([])
//         // console.log("uploaded")
//       })
//       .catch(() => {
//         toast.error("Error uploading!")
//         // console.log("error")
//       })
//   }

//   const previews = files.map((file, index) => (
//     <Preview id={index} key={index} b64={file} handleRemove={removeFile} />
//   ))

//   /////////////   WHEN FILES ARE DROPPED    //////////////
//   const onDrop = useCallback((acceptedFiles) => {
//     Promise.all(
//       acceptedFiles.map(
//         (file) =>
//           new Promise((resolve, reject) => {
//             const reader = new FileReader()
//             reader.readAsDataURL(file)
//             reader.onabort = (msg) => reject(msg)
//             reader.onerror = (error) => reject(error)
//             reader.onload = (data) => {
//               resolve(data.target.result)
//             }
//           })
//       )
//     ).then((base64images) =>
//       base64images.forEach((b64img) => {
//         setFiles((prevFiles) => [...prevFiles, b64img])
//       })
//     )
//   }, [])

//   const {
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isFocused,
//     isDragAccept,
//     isDragReject,
//   } = useDropzone({ onDrop, accept: { "image/*": [] }, maxFiles: 10 })

//   const style = useMemo(
//     () => ({
//       ...baseStyle,
//       ...(isFocused ? focusedStyle : {}),
//       ...(isDragAccept ? acceptStyle : {}),
//       ...(isDragReject ? rejectStyle : {}),
//     }),
//     [isFocused, isDragAccept, isDragReject]
//   )

//   return (
//     <div className="flex flex-col items-center w-full">
//       <form className="w-full h-44 md:w-2/3 mx-auto my-4">
//         <div
//           {...getRootProps({ style })}
//           className="mx-auto flex items-center justify-center w-full h-44"
//         >
//           <input name="photo" id="photo" {...getRootProps()} hidden />
//           {isDragActive ? (
//             <p>Drop photo here...</p>
//           ) : (
//             <p>
//               Drag 'n' drop up to 10 files here, or click to select files...
//             </p>
//           )}
//         </div>
//       </form>

//       {/* ***** UPLOAD BUTTON ***** */}
//       <button
//         onClick={handlePhotosUpload}
//         className="mx-auto text-white bg-blue-500 hover:bg-blue-700 font-bold px-2 py-2 sm:py-1 rounded focus:outline-none"
//       >
//         UPLOAD
//       </button>

//       {/* ***** ** PREVIEWS ** ***** */}
//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-4 gap-4 overflow-x-auto">
//         {previews}
//       </div>
//     </div>
//   )
// }

// const Preview = ({ handleRemove, id, b64 }) => {
//   return (
//     <div className="rounded relative group flex items-center flex-col border-2 hover:border-rose-400 transition-all border-green-400">
//       <FaRegTimesCircle
//         size={24}
//         onClick={() => handleRemove(id)}
//         className="text-rose-500 absolute right-0 cursor-pointer transition-all duration-300 group-hover:opacity-100 group-hover:visible opacity-0 invisible"
//       />
//       <img className="w-64 h-64 object-contain pt-4 p-2" src={b64} />
//     </div>
//   )
// }