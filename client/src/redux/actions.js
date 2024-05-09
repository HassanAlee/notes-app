import { createAsyncThunk } from "@reduxjs/toolkit";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// register user action
export const registerUser = createAsyncThunk(
  "authSlice/registerUser",
  async (data) => {
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
      const response = await res.json();
      if (!res.ok) {
        throw new Error(response);
      }
      return response;
    } catch (error) {
      throw new Error("Failed to register user");
    }
  }
);
