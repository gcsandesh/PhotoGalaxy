import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

<<<<<<< HEAD
export default store
=======
export default store
>>>>>>> server
