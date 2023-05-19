import React, { useState } from "react"
import { TagsInput } from "react-tag-input-component"
import { FaRegTimesCircle } from "react-icons/fa"
import { GENERATE_TAGS } from "../../constants"
import { toast } from "react-hot-toast"

const UploadPreview = ({
  handleRemove,
  file,
  b64,
  isValid,
  tags,
  //   getTags,
  handlePhotosUpload,
  //   setTags,
}) => {
  const [selected, setSelected] = useState(tags || [])

  ////////////////    GENERATE TAGS    //////////////////
  const generateTags = async () => {
    console.log(await getTags())
  }
  //////////////    GET TAGS    //////////////////
  const getTags = async () => {
    console.log("file:", file)
    let formData = new FormData()
    formData.append("photo", file) // file is the image file

    try {
      const res = await fetch(GENERATE_TAGS, {
        method: "POST",
        body: formData,
      })
      
      const data = await res.json()
      console.log("data", data)
      toast.success("Tags generated successfully!")
      return data
    } catch (err) {
      console.log(err)
      toast.error("Error getting tags!")
    }
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-start-1 col-end-3 rounded relative group flex items-center flex-col border-2 hover:border-rose-400 transition-all border-green-400">
        <FaRegTimesCircle
          size={24}
          onClick={handleRemove}
          className="text-rose-500 z-10 absolute right-0 cursor-pointer transition-all duration-300 group-hover:opacity-100 group-hover:visible opacity-0 invisible"
        />
        <img
          className={`${!isValid && "blur-md"}  h-96 object-contain pt-4 p-2`}
          src={b64}
        />
      </div>

      <div className="col-start-3 col-end-5">
        <form>
          <label htmlFor="tags" className="flex flex-col gap-2">
            <span className="">Tags</span>
            <TagsInput
              value={selected}
              onChange={setSelected}
              name="tags"
              placeHolder="Enter tags here"
            />
            <em className="text-sm">Press enter to add new tag</em>

            {/* buttons */}
            <>
              <button
                onClick={generateTags}
                className="my-1 mr-2 px-2 py-1 bg-secondaryGreen hover:bg-green-900 duration-200 rounded-md text-white"
              >
                Generate Tags
              </button>

              <button
                onClick={handlePhotosUpload}
                className="my-1 ml-2 mx-auto text-white bg-blue-500 hover:bg-blue-700 duration-200 font-bold px-3 py-1 sm:py-1 rounded focus:outline-none"
              >
                Upload
              </button>
            </>
          </label>
        </form>
      </div>
    </div>
  )
}

export default UploadPreview
