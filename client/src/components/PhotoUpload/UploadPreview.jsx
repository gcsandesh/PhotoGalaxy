import React from "react"
import { FaRegTimesCircle } from "react-icons/fa"

const UploadPreview = ({ handleRemove, b64, isValid }) => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-start-1 col-end-2 rounded relative group flex items-center flex-col border-2 hover:border-rose-400 transition-all border-green-400">
        <FaRegTimesCircle
          size={24}
          onClick={handleRemove}
          className="text-rose-500 z-10 absolute right-0 cursor-pointer transition-all duration-300 group-hover:opacity-100 group-hover:visible opacity-0 invisible"
        />
        <img
          className={`${
            !isValid && "blur-md"
          } max-w-96 h-96 object-contain pt-4 p-2`}
          src={b64}
        />
      </div>

      <div className="col-start-2 col-end-4">
        <form>
          <label htmlFor="tags">
            
          </label>
        </form>
      </div>
    </div>
  )
}

export default UploadPreview
