import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const AUTH_URL = "http://localhost:9999/api/auth"

const initialState = {
  user: {
    username: "",
    email: "",
    bio: "",
    profilePicture: "",
    accessToken: "",
    isLoggedIn: false,
  },
  isLoading: false,
}

//////////////////////////////////////
/////////////  SIGN UP  //////////////
//////////////////////////////////////

export const signupUser = createAsyncThunk(
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

      if (response.status !== 201) {
        return thunkAPI.rejectWithValue(data)
      } else {
        return data
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

export const loginUser = createAsyncThunk(
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

      if (response.status !== 200) {
        // data returned from server is sent to the signup.fulfilled action
        return thunkAPI.rejectWithValue(data)
      } else {
        return data
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
  reducers: {
    setUser: (state, action) => {
      state.user.email = localStorage.getItem("user").email
    },
    setToken: (state, action) => {
      state.accessToken = localStorage.getItem("accessToken")
    },
    logoutUser: (state, action) => {
      state.user.isLoggedIn = false
      localStorage.clear()
    },
  },
  extraReducers: (builder) => {
    // sign up //

    builder.addCase(signupUser.pending, (state, action) => {
      state.isLoading = true
    })

    builder.addCase(signupUser.rejected, (state, action) => {
      state.isLoading = false
    })

    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.isLoading = false
    })

    // login //

    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true
    })

    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false
    })

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.accessToken))
      state.user.isLoggedIn = true
    })
  },
})

export const { setUser, setToken } = userSlice.actions
export default userSlice.reducer
