import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ADMIN_AUTH_URL } from "../../constants"

const initialState = {
  user: {
    id: "",
    email: "",
    accessToken: "",
    isAdmin: false,
    isLoggedIn: false,
  },
  isLoading: false,
}

//////////////////////////////////////
/////////////  SIGN UP  //////////////
//////////////////////////////////////

export const signupAdmin = createAsyncThunk(
  "adminAuth/signup",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(ADMIN_AUTH_URL + "/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()

      if (response.status !== 201) {
        return thunkAPI.rejectWithValue(data)
      } else {
        return data
      }
    } catch (error) {
      // console.log("Error: ", error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

/////////////////////////////
//////////  LOGIN  //////////
/////////////////////////////

export const loginAdmin = createAsyncThunk(
  "adminAuth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(ADMIN_AUTH_URL + "/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.status !== 200) {
        // data returned from server is sent to the loginAdmin.fulfilled action
        //
        // console.log(data)
        return thunkAPI.rejectWithValue(data)
      } else {
        return data
      }
    } catch (error) {
      // console.log("Error:", error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

/********** ADMIN SLICE ***********/
const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      if (localStorage.getItem("user") && localStorage.getItem("accessToken")) {
        state.user = JSON.parse(localStorage.getItem("user"))
        state.user.accessToken = JSON.parse(localStorage.getItem("accessToken"))
        state.user.isLoggedIn = true
      }
    },
    logoutAdmin: (state, action) => {
      localStorage.clear()
      state.user = {}
      state.user.isLoggedIn = false
    },
  },
  extraReducers: (builder) => {
    // sign up //

    builder.addCase(signupAdmin.pending, (state, action) => {
      state.isLoading = true
    })

    builder.addCase(signupAdmin.rejected, (state, action) => {
      state.isLoading = false
    })

    builder.addCase(signupAdmin.fulfilled, (state, action) => {
      state.isLoading = false
    })

    // login //

    builder.addCase(loginAdmin.pending, (state, action) => {
      state.isLoading = true
      state.user = {}
      localStorage.clear()
    })

    builder.addCase(loginAdmin.rejected, (state, action) => {
      state.isLoading = false
    })

    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      action.payload.admin.isAdmin = true
      localStorage.setItem("user", JSON.stringify(action.payload.admin))
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.accessToken)
      )
      state.user.isLoggedIn = true
      state.isLoading = false
    })
  },
})

export const { setCredentials, logoutAdmin } = adminAuthSlice.actions
export default adminAuthSlice.reducer
