const router = require("express").Router()

const {
  getPhoto,
  getAllPhotos,
  // getPhotosFromCategory,
  getSimilarPhotos,
  uploadPhoto,
  deletePhoto,
  likePhoto,
  unlikePhoto,
} = require("../controllers/photos")
const { verifyToken } = require("../middlewares/auth")

router.route("/").get(getAllPhotos).post(verifyToken, uploadPhoto)
// router.route("/id/:id").get(getPhoto).delete(verifyToken, deletePhoto)
router.route("/id/:id").get(getPhoto).delete(verifyToken, deletePhoto)
// router.get("/category/:category", getPhotosFromCategory)
router.post("/similar", getSimilarPhotos)

router.put("/like/:id", verifyToken, likePhoto)
router.put("/unlike/:id", verifyToken, unlikePhoto)

module.exports = router
