import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

const AUTH_URL = "http://localhost:9999/api/auth"

const initialState = {
  username: "",
  email: "",
  bio: "",
  profilePicture: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  accessToken: "",
  message: "",
}

//////////////////////////////////////
/////////////  SIGN UP  //////////////
//////////////////////////////////////

export const signup = createAsyncThunk(
  "user/signup",
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
        return { ...data }
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (error) {
      console.log("Error: ", error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

/////////////////////////////
//////////  LOGIN  //////////
/////////////////////////////

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(AUTH_URL + "/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()

      if (response.status === 200) {
        // data returned from server is sent to the signup.fulfilled action
        return { ...data }
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (error) {
      console.log("Error:", error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

/********** USER SLICE ***********/
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [signup.pending]: (state, action) => {
      state.isFetching = true
      state.isSuccess = false
      state.isError = false
      state.message = "Signing up..."
    },
    [signup.rejected]: (state, action) => {
      state.isFetching = false
      state.isSuccess = false
      state.isError = true
      const email = action.payload.email
      state.message = `Error creating account '${email}'!.`
    },
    [signup.fulfilled]: (state, action) => {
      state.isFetching = false
      state.isSuccess = true
      state.isError = false
      const email = action.payload.email
      state.message = `Created account '${email}' successfully!.`
    },
    [login.pending]: (state, action) => {
      state.isFetching = true
      state.isSuccess = false
      state.isError = false
      state.message = "Logging in..."
    },
    [login.rejected]: (state, action) => {
      state.isFetching = false
      state.isSuccess = false
      state.isError = true
      const email = action.payload.email
      state.message = `Login failed for ${email}!`
    },
    [login.fulfilled]: (state, action) => {
      state.isFetching = false
      state.isSuccess = true
      state.isError = false
      const { email, username, accessToken } = action.payload
      state.email = email
      state.username = username
      state.accessToken = accessToken
      state.message = `Successfully logged in as ${email}!`
    },
  },
})

// export const { } = userSlice.actions
export default userSlice.reducer
