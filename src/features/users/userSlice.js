import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ankit Raj" },
  { id: "1", name: "Sarita Devi" },
  { id: "2", name: "Abhay Raj" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
