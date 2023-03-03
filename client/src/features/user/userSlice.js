import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  isLoggedIn: true,
  accessToken: "",
  isLoading: true,
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      console.log("login reducer")
      console.log(state)
    },
  },
})

export const { login } = userSlice.actions
export default userSlice.reducer
