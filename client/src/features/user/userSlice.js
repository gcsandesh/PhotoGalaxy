import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const AUTH_URL = "http://localhost:9999/api/auth"

const initialState = {
  username: "",
  email: "",
  bio: "",
  profilePicture: "",
  isLoggedIn: false,
  accessToken: "",
  isLoading: false,
  message: "",
}

//////////////////////////////////////
/////////////  SIGN UP  //////////////
//////////////////////////////////////

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await fetch(AUTH_URL + "/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      })

      const data = await response.json()
      // console.log("data after signup: ", data)

      if (response.status === 200) {
        return { ...data, username: username, email: email }
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (error) {
      console.log("Error: ", error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

/********** USER SLICE ***********/
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
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.isLoading = true
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false
      state.message = action.payload.message
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false
      state.email = action.payload.email
      state.username = action.payload.username
    },
  },
})

export const { login } = userSlice.actions
export default userSlice.reducer
