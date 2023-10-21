import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "configuration";

axios.defaults.baseURL = BASE_URL;

export const fetchDeals= createAsyncThunk(
  "deals/fetchDeals",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/deals`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);