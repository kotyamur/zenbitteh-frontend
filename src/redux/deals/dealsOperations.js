import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:4000/api/";


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