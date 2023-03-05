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
      state.isLoading = true
    },
    [signup.rejected]: (state, action) => {
      state.isLoading = false
      // create toast here
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoading = false
      // create toast here
    },
    [login.pending]: (state, action) => {
      state.isLoading = true
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false
      state.message = action.payload.message
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false
      state.email = action.payload.email
      state.username = action.payload.username
      state.accessToken = action.payload.accessToken
    },
  },
})

// export const { } = userSlice.actions
export default userSlice.reducer
