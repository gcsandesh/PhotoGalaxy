const cloudinary = require('../utils/cloudinary')

////////////    UPLOAD ONE OR MANY PHOTOS    /////////////
function uploadPhotos(req, res) {
  const photos = req.body

  // info about the access
  // const accessInfo = req.accessInfo
  const photoBuffers = []
  if (photos) {
    for (const photo of Object.keys(photos)) {
      // console.log(photo, Buffer.from(photos[photo]))
      photoBuffers.push(Buffer.from(photos[photo]))
    }
    console.log('buffers:', photoBuffers)

    /////  uploading to cloudinary  /////
    if (photoBuffers.length) {
      photoBuffers.forEach((photo) => {
        console.log('photo', photo)
        uploadPhotoFromBuffer(photo)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      })
    }
  }
  // get file url after upload
  // create photo document in photos collection in mongodb
  // add author email, upload time from 'accessInfo'
  // add photo url from upload result
  return res.send({ message: 'uploaded' })
}

function uploadPhotoFromBuffer(photo) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder: 'test', resource_type: 'raw', format: 'jpg' },
        (error, result) => {
          if (error) reject(error)
          if (result) resolve(result)
        }
      )
      .end(photo)
  })
}

////////////    GET PHOTO    /////////////
function getPhoto() {
  console.log('a photo is sent')
  return
}

////////////    GET ALL PHOTOS    /////////////
function getAllPhotos() {
  console.log('All photos are sent!')
}

////////////    GET ALL PHOTOS FROM A CATEGORY    /////////////
function getPhotosFromCategory(req, res) {
  console.log('Send photos of specific category')
}

////////////    GET PHOTOS SIMILAR TO A PHOTO    /////////////
function getSimilarPhotos(req, res) {
  // get a photo from request and send other photos that are similar to them
  console.log('similar photos are sent')
}

module.exports = {
  getAllPhotos,
  getPhoto,
  getPhotosFromCategory,
  getSimilarPhotos,
  uploadPhotos,
}
