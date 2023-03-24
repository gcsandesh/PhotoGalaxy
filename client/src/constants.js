const API_URL =
  "http://photogalaxy-backend-4a98n1f9r-sandeshgc.vercel.app:9999/api"

// AUTH
export const USER_AUTH_URL = API_URL + "/auth/user"

// PHOTO
export const GET_PHOTO_BY_ID = API_URL + "/photos/id/"
export const GET_USER_UPLOADS = API_URL + "/photos?uploaded_by="
export const GET_USER_LIKES = API_URL + "/photos?liked_by="
export const GET_ALL_PHOTOS = API_URL + "/photos"
export const UPLOAD_PHOTOS = API_URL + "/photos/"
export const DELETE_PHOTO = API_URL + "/photos/id/"

// USER
export const GET_USER_BY_ID = API_URL + "/users/id/"
