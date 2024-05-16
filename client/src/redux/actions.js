import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// register user action
export const registerUser = createAsyncThunk(
  "authSlice/registerUser",
  async (data, { rejectWithValue }) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const raw = JSON.stringify(data);
    const requestOptions = {
      method: "POST",
      headers,
      body: raw,
    };
    try {
      let res = await fetch(
        `${API_BASE_URL}/api/v1/user/register`,
        requestOptions
      );
      if (!res.ok) {
        await res.json().then((response) => {
          throw new Error(response.message);
        });
      }
      const response = await res.json();
      toast.success(response.message);
    } catch (error) {
      toast.error(error.message);
      throw new Error(error.message);
    }
  }
);
