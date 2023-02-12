const router = require("express").Router()
const {
	getPhoto,
	getAllPhotos,
	getPhotosFromCategory,
	getSimilarPhotos,
	uploadPhoto,
} = require("../controllers/photoController")

router.get("/", getAllPhotos)
router.get("/id/:id", getPhoto)
router.get("/category/:category", getPhotosFromCategory)
router.post("/similar", getSimilarPhotos)
router.post("/", uploadPhoto)

module.exports = router
