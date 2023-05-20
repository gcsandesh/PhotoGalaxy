import React, { useEffect, useState } from "react"
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
  handlePhotosUpload,
  setTags,
}) => {
  const [selected, setSelected] = useState(tags || [])

  ////////////////    GENERATE TAGS    //////////////////
  const generateTags = async () => {
    // console.log(await getTags())
    if (!isValid) return toast.error("Cannot get tags for this photo!")
    const receivedTags = await getTags()
    console.log(receivedTags)
    setSelected((prevSelected) => {
      const newTags = receivedTags.filter((tag) => !prevSelected.includes(tag))
      return [...prevSelected, ...newTags]
    })
  }

  const handleTagsChange = (enteredTag) => {
    setSelected(enteredTag)
  }

  useEffect(() => {
    setTags(selected)
  }, [selected])
  //////////////    GET TAGS    //////////////////
  const getTags = async () => {
    // console.log("file:", file)
    let formData = new FormData()
    formData.append("photo", file) // file is the image file

    try {
      const res = await fetch(GENERATE_TAGS, {
        method: "POST",
        body: formData,
      })

      const data = await res.json()
      // setSelected(data)
      toast.success("Tags generated!")
      return data
    } catch (err) {
      // console.log(err)
      toast.error("Error getting tags!")
    }
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <div
        className={`${
          !isValid && "border-rose-400 "
        } col-start-1 col-end-3 rounded relative group flex items-center flex-col border-2 hover:border-rose-400 transition-all border-green-400`}
      >
        <FaRegTimesCircle
          size={24}
          onClick={handleRemove}
          className="text-rose-500 z-10 absolute right-0 cursor-pointer transition-all duration-300 group-hover:opacity-100 group-hover:visible opacity-0 invisible"
        />
        <img
          className={`${!isValid && "blur-md"}  h-96 object-contain pt-4 p-2`}
          // className={`h-96 object-contain pt-4 p-2`}
          src={b64}
        />
      </div>

      <div className="col-start-3 col-end-5">
        <form>
          <label htmlFor="tags" className="flex flex-col gap-2">
            <span className="">Tags</span>
            <TagsInput
              value={tags}
              onChange={handleTagsChange}
              name="tags"
              placeHolder="Enter tags here..."
              onExisting={() => {
                toast.error("Tag already exists!")
              }}
              disabled={!isValid}
            />
            {isValid ? (
              <em className="text-sm">Press enter to add new tags</em>
            ) : (
              <em className="text-sm text-red-500">
                Cannot add tags for this photo!
              </em>
            )}

            {/* buttons */}
            <>
              <button
                type="button"
                onClick={generateTags}
                className={`${
                  !isValid && "bg-gray-500 hover:bg-gray-500 text-gray-700 "
                }my-1 w-1/2 px-2 py-1 bg-secondaryGreen hover:bg-green-900 duration-200 rounded-md text-white`}
              >
                Generate Tags
              </button>

              <button
                type="submit"
                onClick={handlePhotosUpload}
                className={`${
                  !isValid && "bg-gray-500 hover:bg-gray-500 text-gray-700 "
                }w-1/2 my-1 text-white bg-blue-500 hover:bg-blue-700 duration-200 px-3 py-1 sm:py-1 rounded focus:outline-none`}
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
