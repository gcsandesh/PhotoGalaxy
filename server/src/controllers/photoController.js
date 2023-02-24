function uploadPhoto(req, res) {
  console.log(req.body)
  console.log("photo is received and uploaded to server")
  return res.send({ message: req.body })
}

function getPhoto() {
  console.log("a photo is sent")
  return
}

function getAllPhotos() {
  console.log("All photos are sent!")
}

function getPhotosFromCategory(req, res) {
  console.log("Send photos of specific category")
}

function getSimilarPhotos(req, res) {
  // get a photo from request and send other photos that are similar to them
  console.log("similar photos are sent")
}

module.exports = {
  getAllPhotos,
  getPhoto,
  getPhotosFromCategory,
  getSimilarPhotos,
  uploadPhoto,
}
