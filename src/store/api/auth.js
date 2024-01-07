import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { CONFIGS } from "../../config";
import apiEndpoints from "../../config/apiEndpoints";

export const login = createAsyncThunk(
  "auth/signin",
  async (payload, thunkApi) => {
    try {
      const resp = await fetch(`${CONFIGS.SERVER_URL}/${apiEndpoints.login}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      if (resp.status === 200) {
        if (data?.success) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.email);
        }
        return data;
      }
      return thunkApi.rejectWithValue(data);
    } catch (error) {
      console.log("Error", error.response.data);
      thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: localStorage.getItem("email") || "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    token: localStorage.getItem("token") || "",
  },
  reducers: {
    clearAuthMessage: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.errorMessage = "";
      return state;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.errorMessage = "";
      state.email = "";
      state.token = "";
      return state;
    },
  },
  extraReducers: {
    // Extra reducer comes here
    [login.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;
      state.errorMessage = "";
      state.token = payload.token;
      state.email = payload.email;
    },
    [login.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [login.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearAuthMessage, logout } = authSlice.actions;
export const authSelector = (state) => state.auth;

/** using create api */
// export const adminApi = createApi({
//   reducerPath: "admin",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${CONFIGS.SERVER_URL}/admin`,
//   }),
//   endpoints: (builder) => ({
//     signin: builder.mutation({
//       query: (body) => ({ url: "/signin", method: "POST", body }),
//       transformResponse: (response) => {
//         if (response?.success) {
//           localStorage.setItem("token", response?.token || null);
//         }
//         return response;
//       },
//     }),
//     validate: builder.query({
//       query: () => ({ url: "/validate", headers: {} }),
//     }),
//   }),
// });

// export const { useSigninMutation } = adminApi;
