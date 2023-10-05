import { createSlice } from "@reduxjs/toolkit";

export const validationSchemaSlice = createSlice({
  name: "validationSchema",
  initialState: null, // Initial state is null or an empty object
  reducers: {
    setValidationSchema: (state, action) => {
      return action.payload; // Set the validation schema from the action payload
    },
  },
});

export const { setValidationSchema } = validationSchemaSlice.actions;
export default validationSchemaSlice.reducer;