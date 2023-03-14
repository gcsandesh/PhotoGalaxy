const cloudinary = require("../utils/cloudinary")
const { Photo } = require("../models/photos")

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

      console.log("pushing:", data)
      photoUploadResponse.push()

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

      await photo.save()
      // console.log(data)
      // photoUploadResponse.push(data)
      // console.log(response)
      // photoUploadResponse.push(response)
    })
    // ).then((result) => console.log(result, photoUploadResponse))
    console.log(photoUploadResponse)

    return res.status(201).json({ message: photoUploadResponse })
  } catch (error) {
    return res.status(500).json({ message: "Error uploading photos!" })
  }
}

////////////    GET PHOTO    /////////////
const getPhoto = async (req, res) => {
  const photoID = req.params.id

  const photo = console.log("a photo is sent")
  return
}

////////////    GET ALL PHOTOS    /////////////
function getAllPhotos() {
  console.log("All photos are sent!")
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
