/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';

global.React = React;
import { fireEvent, render, waitFor } from "@testing-library/react";
import DynamicForm from "./dynamic-form";
import store from "../../app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe(DynamicForm, () => {
  it("validate first name", async () => {
    const { queryByTestId, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DynamicForm />
        </BrowserRouter>
      </Provider>
    );

    const input = getByTestId("firstNameinput");
    fireEvent.change(input, { target: { value: "AAA" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(queryByTestId("firstName-error")).toBeNull();
    });

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(getByTestId("firstName-error")).not.toBe(null);
      expect(getByTestId("firstName-error")).toHaveTextContent("Required");
    });
  });

  it("validate last name", async () => {
    const { queryByTestId, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DynamicForm />
        </BrowserRouter>
      </Provider>
    );

    const input = getByTestId("lastNameinput");
    fireEvent.change(input, { target: { value: "AAA" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(queryByTestId("lastName-error")).toBeNull();
    });

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(getByTestId("lastName-error")).not.toBe(null);
    });
  });

  it("validate email", async () => {
    const { queryByTestId, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DynamicForm />
        </BrowserRouter>
      </Provider>
    );

    const input = getByTestId("emailinput");
    fireEvent.change(input, { target: { value: "test@gmail.com" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(queryByTestId("email-error")).toBeNull();
    });

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(getByTestId("email-error")).not.toBe(null);
    });

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(getByTestId("email-error")).not.toBe(null);
    });
  });

  it("validate phone field", async () => {
    const { queryByTestId, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DynamicForm />
        </BrowserRouter>
      </Provider>
    );

    const input = getByTestId("phoneinput");
    fireEvent.change(input, { target: { value: Number("0000") } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(queryByTestId("phone-error")).toBeNull();
    });

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(getByTestId("phone-error")).not.toBe(null);
    });

    fireEvent.change(input, { target: { value: "string input" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(getByTestId("phone-error")).not.toBe(null);
    });
  });
});
