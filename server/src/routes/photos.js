const router = require('express').Router()
const path = require('path')
const multer = require('multer')
const {
  getPhoto,
  getAllPhotos,
  getPhotosFromCategory,
  getSimilarPhotos,
  uploadPhotos,
} = require('../controllers/photos')

const upload = multer({ dest: path.resolve(__dirname, '../../photos') })

router.get('/', getAllPhotos)
router.get('/id/:id', getPhoto)
router.get('/category/:category', getPhotosFromCategory)
router.post('/similar', getSimilarPhotos)
router.post('/', upload.single('photo'), uploadPhotos)

module.exports = router
