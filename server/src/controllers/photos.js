const cloudinary = require("../utils/cloudinary")
const { Photo } = require("../models/photos")
const { User } = require("../models/users")

////////////    UPLOAD ONE OR MANY PHOTOS    /////////////

async function uploadPhotos(req, res) {
  const accessInfo = req.accessInfo
  const photos = req.body.photos

  // console.log(accessInfo)

  if (!photos.length) {
    return res.status(400).send({ message: "No photos to upload!" })
  }

  try {
    // either all or no photos should be saved
    const photoUploadResponse = []

    // Promise.all(
    photos.forEach(async (eachPhoto, index) => {
      const data = await cloudinary.uploader.upload(eachPhoto, {
        folder: `projects/PhotoGalaxy`,
      })

      const photo = new Photo({
        url: data.secure_url,
        format: data.format,
        resource_type: data.resource_type,
        dimensions: {
          height: data.height,
          width: data.width,
        },
        bytes: data.bytes,
        uploaded_by: accessInfo.user._id,
      })

      const savedPhoto = await photo.save()

      const userFilter = { _id: accessInfo.user._id }
      const updateData = {
        uploaded_photos: savedPhoto._id,
      }
      const user = await User.findOneAndUpdate(
        userFilter,
        { $push: updateData },
        {
          new: true,
        }
      )

      // console.log("saved photo id:", savedPhoto.id)
      console.log("user", user)

      console.log("savedphoto:", savedPhoto)
      photoUploadResponse.push(savedPhoto)
    })
    // ).then((result) => console.log(result, photoUploadResponse))
    console.log("arrayofresponses", photoUploadResponse)

    return res.status(201).json({ message: photoUploadResponse })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error uploading photos!", error: error.message })
  }
}

////////////    GET A PHOTO    /////////////

const getPhoto = async (req, res) => {
  const photoID = req.params.id

  try {
    const photo = await Photo.findOne({ _id: photoID })

    if (!photo) {
      return res.status(404).json({ message: "Photo not found!" })
    }

    return res.json({ photo })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error getting photo!", error: error.message })
  }
}

////////////    GET ALL PHOTOS    /////////////

const getAllPhotos = async (req, res) => {
  const query = req.query
  // console.log(query)

  // get all photos if no query params
  if (!query) {
    try {
      const allPhotos = await Photo.find({})
      // console.log({ photos: allPhotos })
      if (!allPhotos.length) {
        return res.status(404).json({ message: "No photos found!" })
      }

      return res.json({ photos: allPhotos })
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error getting photos!", error: error.message })
    }
  }

  // if there is query
  try {
    const userID = query.user_id
    const photos = await Photo.find({ uploaded_by: userID })

    if (!photos || !photos.length) {
      return res.status(404).json({ message: "No uploads yet!" })
    }

    // if there are photos uploaded by user
    return res.json({ uploads: photos })
  } catch (error) {
    return res.status(500).json({ message: "Error getting photos!" })
  }
}

////////////    GET ALL PHOTOS FROM A CATEGORY    /////////////

function getPhotosFromCategory(req, res) {
  console.log("Send photos of specific category")
}

////////////    GET PHOTOS SIMILAR TO A PHOTO    /////////////
function getSimilarPhotos(req, res) {
  // get a photo from request and send other photos that are similar to them
  console.log("similar photos are sent")
}

module.exports = {
  getAllPhotos,
  getPhoto,
  getPhotosFromCategory,
  getSimilarPhotos,
  uploadPhotos,
}
