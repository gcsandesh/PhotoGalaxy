const cloudinary = require("../utils/cloudinary")

////////////    UPLOAD ONE OR MANY PHOTOS    /////////////
function uploadPhotos(req, res) {
  const accessInfo = req.accessInfo
  const photos = req.body.photos

  const photoUploadResponse = []
  console.log(accessInfo)

  if (!photos.length) {
    return res.status(400).send({ message: "No photos to upload!" })
  }

  photos.forEach((photo, index) => {
    const response = cloudinary.uploader.upload(photo, {
      folder: `projects/PhotoGalaxy`,
    })

    response
      .then((data) => {
        photoUploadResponse.push(data)
        console.log(data)
        // console.log(data.secure_url)
      })
      .catch((error) => console.log(error))
  })

  // get file url after upload
  // create photo document in photos collection in mongodb
  // add author email, upload time from 'accessInfo'
  // add photo url from upload result
  return res.send({ message: "uploaded" })
}

////////////    GET PHOTO    /////////////
function getPhoto() {
  console.log("a photo is sent")
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
