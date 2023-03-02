const cloudinary = require('cloudinary').v2

////////////    UPLOAD ONE OR MANY PHOTOS    /////////////
function uploadPhotos(req, res) {
  console.log('files', req.files)
  console.log(req.body)
  console.log('query', req.query)
  console.log('photo is received and uploaded to server')

  const resp = cloudinary.uploader.upload(req.files[0], {
    public_id: 'first_upload_gc',
  })

  resp.then(() => console.log('uploaded')).catch((err) => console.log(err))

  return res.send({ message: req.body })
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