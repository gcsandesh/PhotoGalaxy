////////////    UPLOAD ONE OR MANY PHOTOS    /////////////
function uploadPhotos(req, res) {
  console.log(req.body)
  console.log("query", req.query)
  console.log("photo is received and uploaded to server")
  return res.send({ message: req.body })
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
