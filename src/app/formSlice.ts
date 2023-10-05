import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { data } from "../components/field-set";

export const INITIAL_STATE: any = {};

export const formSlice = createSlice({
  name: "formSlice",
  initialState: INITIAL_STATE,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      (state as any)[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      data.forEach((element) => {
        if (Array.isArray(element)) {
          element.forEach((subElement) => {
            state[subElement.id] = "";
          });
        } else {
          if (element.type === "select") {
            state[element.id] = element.options ? element.options[0] : "";
          } else state[element.id] = "";
        }
      });
      (state as any).errors = {};
    },
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
