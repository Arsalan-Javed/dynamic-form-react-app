import formReducer, { INITIAL_STATE, updateField, resetForm } from "./formSlice";

describe("formSlice", () => {
  it("should handle updateField", () => {
    const field = "fieldName";
    const value = "fieldValue";

    const action = updateField({ field, value });
    const newState = formReducer(INITIAL_STATE, action);

    expect(newState[field]).toEqual(value);
  });

  it("should handle resetForm", () => {
    const initialState = {
      fieldName1: "value1",
      fieldName2: "value2",
      // ... other initial state properties
    };

    // Simulate some changes to the state
    const modifiedState = formReducer(initialState, updateField({ field: "fieldName3", value: "value3" }));

    // Reset the form
    const action = resetForm();
    const newState = formReducer(modifiedState, action);

    // Check if the state is reset to the initial state
    expect(newState).toMatchObject(INITIAL_STATE);
  });
});
