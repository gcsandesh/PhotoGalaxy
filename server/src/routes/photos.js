const router = require('express').Router()
// const path = require('path')
// const multer = require('multer')
const {
  getPhoto,
  getAllPhotos,
  getPhotosFromCategory,
  getSimilarPhotos,
  uploadPhotos,
} = require('../controllers/photos')
const { verifyToken } = require('../middlewares/auth')

// const upload = multer({ dest: path.resolve(__dirname, '../../photos') })

router.route('/').get(getAllPhotos)
router.post('/', verifyToken, uploadPhotos)
router.get('/id/:id', getPhoto)
router.get('/category/:category', getPhotosFromCategory)
router.post('/similar', getSimilarPhotos)
// router.post('/', upload.single('photo'), uploadPhotos)

// router.get('/protected', verifyToken, (req, res) => {
//   res.json({ message: req.accessInfo })
// })

module.exports = router
