const router = require("express").Router()
// const path = require('path')
// const multer = require('multer')
const {
  getPhoto,
  getAllPhotos,
  getPhotosFromCategory,
  getSimilarPhotos,
  uploadPhotos,
} = require("../controllers/photos")
const { verifyToken } = require("../middlewares/auth")

router.route("/").get(getAllPhotos).post(verifyToken, uploadPhotos)
router.get("/id/:id", getPhoto)
router.get("/category/:category", getPhotosFromCategory)
router.post("/similar", getSimilarPhotos)

module.exports = router
