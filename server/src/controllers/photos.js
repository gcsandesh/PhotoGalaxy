const cloudinary = require("../utils/cloudinary")
const { Photo } = require("../models/photos")
const { User } = require("../models/users")
const _ = require("lodash")

////////////    UPLOAD ONE OR MANY PHOTOS    /////////////

async function uploadPhoto(req, res) {
  const accessInfo = req.accessInfo
  const file = req.body.photo
  const tags = req.body.tags

  // console.log(accessInfo)

  if (!file) {
    return res.status(400).send({ message: "No photo to upload!" })
  }
  if (!tags) {
    return res.status(400).send({ message: "Tags are required!" })
  }

  try {
    const data = await cloudinary.uploader.upload(file, {
      folder: `projects/PhotoGalaxy`,
    })

    const photo = new Photo({
      public_id: data.public_id,
      url: data.secure_url,
      format: data.format,
      resource_type: data.resource_type,
      dimensions: {
        height: data.height,
        width: data.width,
      },
      bytes: data.bytes,
      uploaded_by: accessInfo.user._id,
      tags: tags,
    })

    const savedPhoto = await photo.save()

    const userFilter = { _id: accessInfo.user._id }
    const updateData = {
      uploaded_photos: savedPhoto._id,
    }

    const user = await User.findOneAndUpdate(
      userFilter,
      { $push: updateData, $inc: { uploads_count: 1 } },
      {
        new: true,
      }
    )

    return res.status(201).json({
      message: "Uploaded successfully!",
      upload: { photo: savedPhoto, user: user.email },
    })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error uploading photos!", error: error.message })
  }
}

////////////    GET A PHOTO    /////////////

const getPhoto = async (req, res) => {
  const photoID = req.params.id

  try {
    const photo = await Photo.findOne({ _id: photoID }).populate(
      "uploaded_by",
      "-password"
    )

    if (!photo) {
      return res.status(404).json({ message: "Photo not found!" })
    }

    return res.json({ photo })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error getting photo!", error: error.message })
  }
}

////////////    GET ALL PHOTOS    /////////////

const getAllPhotos = async (req, res) => {
  const query = req.query
  // console.log(query)

  if (!_.isEmpty(query)) {
    // if there is query
    if (_.has(query, "uploaded_by")) {
      // GET PHOTOS UPLOADED BY USER

      try {
        const userID = query.uploaded_by
        const photos = await Photo.find({ uploaded_by: userID })

        if (!photos || !photos.length) {
          return res.status(404).json({ message: "No uploads yet!" })
        }

        // if there are photos uploaded by user
        return res.json({ uploads: photos })
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error getting uploaded photos!" })
      }
    } else if (_.has(query, "liked_by")) {
      //  GET PHOTOS LIKED BY USER

      try {
        const userID = query.liked_by
        const photos = await Photo.find({ liked_by: userID })
        if (!photos || !photos.length) {
          return res.status(404).json({ message: "No likes yet!" })
        }

        // if there are photos liked by user
        return res.json({ likes: photos })
      } catch (error) {
        return res.status(500).json({ message: "Error getting liked photos!" })
      }
    }
  }

  // get all photos if no query params
  try {
    const allPhotos = await Photo.find({})
    if (!allPhotos.length) {
      return res.status(404).json({ message: "No photos found!" })
    }

    return res.json({ photos: allPhotos })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error getting photos!", error: error.message })
  }
}

////////////    GET ALL PHOTOS FROM A CATEGORY    /////////////

// function getPhotosFromCategory(req, res) {
//   console.log("Send photos of specific category")
// }

////////////    GET PHOTOS SIMILAR TO A PHOTO    /////////////
function getSimilarPhotos(req, res) {
  // get a photo from request and send other photos that are similar to them
  console.log("similar photos are sent")
  res.send({ message: "api incomplete!" })
}

/*****
/  DELETE PHOTO
*****/
const deletePhoto = async (req, res) => {
  const photoID = req.params.id
  const userID = req.accessInfo.user._id

  try {
    const photo = await Photo.findById(photoID)

    console.log(photo)
    if (!photo) {
      return res.status(404).json({ message: "Photo does not exist!" })
    }

    if (photo.uploaded_by.toString() !== userID.toString()) {
      return res.status(401).json({ message: "Unauthorized!" })
    }

    const user = await User.findOneAndUpdate(
      { _id: photo.uploaded_by },
      {
        // remove the photo id from user uploads by ID
        $pullAll: {
          uploaded_photos: [{ _id: photo._id }],
        },
        // decrement the uploads count
        $inc: {
          uploads_count: -1,
        },
      },
      { new: true }
    )

    if (!user) {
      return res.status(404).json({ message: "User not found!" })
    }

    await cloudinary.uploader.destroy(photo.public_id)
    const response = await Photo.findByIdAndDelete(photo._id)
    // console.log(response)
    return res.json({ deleted: response })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

// like a photo
const likePhoto = async (req, res) => {
  const photoID = req.params.id
  const userID = req.accessInfo.user._id

  try {
    const photo = await Photo.findByIdAndUpdate(
      photoID,
      {
        $push: { liked_by: userID },
        $inc: { likes_count: 1 },
      },
      { new: true }
    )

    if (!photo) {
      return res.status(404).json({ message: "Photo not found!" })
    }

    const user = await User.findOneAndUpdate(
      { _id: userID },
      {
        $push: { liked_photos: photoID },
      },
      { new: true }
    )
    return res.json({ message: "Photo liked!", photo, user: user.email })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}
// unlike a photo
const unlikePhoto = async (req, res) => {
  const photoID = req.params.id
  const userID = req.accessInfo.user._id

  try {
    const photo = await Photo.findByIdAndUpdate(
      photoID,
      {
        $pull: { liked_by: userID },
        $inc: { likes_count: -1 },
      },
      { new: true }
    )

    if (!photo) {
      return res.status(404).json({ message: "Photo not found!" })
    }

    const user = await User.findOneAndUpdate(
      { _id: userID },
      {
        $pull: { liked_photos: photoID },
      },
      { new: true }
    )

    res.send({ message: "Photo unliked!", photo: photo, user: user.email })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

module.exports = {
  getAllPhotos,
  getPhoto,
  // getPhotosFromCategory,
  getSimilarPhotos,
  uploadPhoto,
  deletePhoto,
}
