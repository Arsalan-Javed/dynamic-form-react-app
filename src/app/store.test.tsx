import configureStore from "./store";
import formReducer, { resetForm, updateField } from "./formSlice";


describe("configureStore", () => {
  let store: any;

  beforeEach(() => {
    // Reset the store before each test
    store = configureStore;
  });

  it("should initialize with the correct initial state", () => {
    const initialState = store.getState();

    // Assuming INITIAL_STATE is exported from formSlice
    expect(initialState.form).toEqual(formReducer(undefined, {})); // Check if the form state matches the initial state
    // Add more checks if there are other reducers in the store
  });

  it("should handle updateField action correctly", () => {
    const field = "fieldName";
    const value = "fieldValue";

    store.dispatch(updateField({ field, value }));

    const currentState = store.getState();
    const expectedState = {
      form: formReducer(undefined, updateField({ field, value })),
      // Add more expected state for other reducers if necessary
    };

    expect(currentState).toEqual(expectedState);
  });

  it("should handle resetForm action correctly", () => {
    // Dispatch an updateField action to modify the state
    const field = "fieldName";
    const value = "fieldValue";
    store.dispatch(updateField({ field, value }));

    // Dispatch resetForm to reset the form state
    store.dispatch(resetForm());

    // Check if the form state is reset
    const currentState = store.getState();
    const expectedState = {
      form: formReducer(undefined, { type: 'any' }), // Assuming resetForm sets the state to its initial value
      // Add more expected state for other reducers if necessary
    };

    // Use toMatchObject for partial matching
    expect(currentState).toMatchObject(expectedState);
  });
  
});
