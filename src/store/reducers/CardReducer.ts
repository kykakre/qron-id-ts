import { ICard } from "./../../types/cardTypes";
import { createSlice } from "@reduxjs/toolkit";

interface CardState {
  card: ICard[];
  isLoading: boolean;
  error: string;
}

const initialState: CardState = {
  card: [],
  isLoading: false,
  error: "",
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
});

export default cardSlice.reducer;
