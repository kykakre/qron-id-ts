import { ISupport } from "./../../models/ISupport";
import { createSlice } from "@reduxjs/toolkit";

interface SupportState {
  support: ISupport[];
  isLoading: boolean;
  error: string;
}

const initialState: SupportState = {
  support: [],
  isLoading: false,
  error: "",
};

export const supportSlice = createSlice({
  name: "support",
  initialState,
  reducers: {},
});

export default supportSlice.reducer;
