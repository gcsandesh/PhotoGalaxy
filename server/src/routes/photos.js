const router = require("express").Router()
const {
  getPhoto,
  getAllPhotos,
  getPhotosFromCategory,
  getSimilarPhotos,
  uploadPhotos,
} = require("../controllers/photos")

router.get("/", getAllPhotos)
router.get("/id/:id", getPhoto)
router.get("/category/:category", getPhotosFromCategory)
router.post("/similar", getSimilarPhotos)
router.post("/", uploadPhotos)

module.exports = router
