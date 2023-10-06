/**
 * @jest-environment jsdom
 */

import React from 'react'

import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
  getByRole,
} from "@testing-library/react";
import { Fields } from "./Fields";
import { Provider } from "react-redux";
import store from "../../../app/store";
import * as formik from "formik";


describe("Fields", () => {
  it("renders an input field for type text and required true", () => {
    const { getByTestId , getByText} = render(
      <Provider store={store}>
        <formik.Formik initialValues={{ FirstName: "" }} onSubmit={() => {}}>
          <formik.Form>
            <Fields
              label="FirstName"
              name="FirstName"
              type="text"
              value="test value"
              aria-labelledby="FirstName"
              required={true}
            />
          </formik.Form>
        </formik.Formik>
      </Provider>
    );
    const inputField = getByTestId("FirstNameinput");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "text");
    expect(inputField).toHaveAttribute("required");
  });

  it("renders an input field for type text and required false", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <formik.Formik
          initialValues={{ address1: "" }}
          onSubmit={() => {}}
        >
          <formik.Form>
            <Fields
              label="address1"
              name="address1"
              type="text"
              value=""
              aria-labelledby="address1"
              required={false}
            />
          </formik.Form>
        </formik.Formik>
      </Provider>
    );
    const inputField = getByTestId("address1input");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "text");
    expect(inputField).not.toHaveAttribute("required");
  });

  it("renders an input field for type email and required true", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <formik.Formik
          initialValues={{ email: "" }}
          onSubmit={() => {}}
        >
          <formik.Form>
            <Fields
              label="email"
              name="email"
              type="email"
              value=""
              aria-labelledby="email"
              required={true}
            />
          </formik.Form>
        </formik.Formik>
      </Provider>
    );
    const inputField = getByTestId("emailinput");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "email");
    expect(inputField).toHaveAttribute("required");

  });

  it("renders an input field for type email and required false", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <formik.Formik
          initialValues={{ fieldName: "" }}
          onSubmit={() => {}}
        >
          <formik.Form>
            <Fields
              label="email"
              name="email"
              type="email"
              value=""
              aria-labelledby="email"
              required={false}
            />
          </formik.Form>
        </formik.Formik>
      </Provider>
    );
    const inputField = getByTestId("emailinput");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "email");
    expect(inputField).not.toHaveAttribute("required");
  });

  it("renders an input field for type number and required true", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <formik.Formik
          initialValues={{ fieldName: "" }}
          onSubmit={() => {}}
        >
          <formik.Form>
            <Fields
              label="number"
              name="number"
              type="number"
              value=""
              aria-labelledby="number"
              required={true}
            />
          </formik.Form>
        </formik.Formik>
      </Provider>
    );
    const inputField = getByTestId("numberinput");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "number");
    expect(inputField).toHaveAttribute("required");
  });

  it("renders an input field for type number and required false", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <formik.Formik
          initialValues={{ fieldName: "" }}
          onSubmit={() => {}}
        >
          <formik.Form>
            <Fields
              label="number"
              name="number"
              type="number"
              value=""
              aria-labelledby="number"
              required={false}
            />
          </formik.Form>
        </formik.Formik>
      </Provider>
    );
    const inputField = getByTestId("numberinput");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "number");
    expect(inputField).not.toHaveAttribute("required");
  });

  it("renders an select field and required true", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <formik.Formik
          initialValues={{ fieldName: "" }}
          onSubmit={() => {}}
        >
          <formik.Form>
            <Fields
              label="select"
              name="select"
              type="select"
              value=""
              aria-labelledby="select"
              required={true}
            />
          </formik.Form>
        </formik.Formik>
      </Provider>
    );
    const inputField = getByTestId("selectinput");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "select");
    expect(inputField).toHaveAttribute("required");
  });

  it("renders an select field and required false", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <formik.Formik
          initialValues={{ fieldName: "" }}
          onSubmit={() => {}}
        >
          <formik.Form>
            <Fields
              label="select"
              name="select"
              type="select"
              value=""
              aria-labelledby="select"
              required={false}
            />
          </formik.Form>
        </formik.Formik>
      </Provider>
    );
    const inputField = getByTestId("selectinput");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "select");
    expect(inputField).not.toHaveAttribute("required");
  });

  it("renders an textarea field and required false", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <formik.Formik
          initialValues={{ fieldName: "" }}
          onSubmit={() => {}}
        >
          <formik.Form>
            <Fields
              label="textarea"
              name="textarea"
              type="textarea"
              value=""
              aria-labelledby="textarea"
              required={false}
            />
          </formik.Form>
        </formik.Formik>
      </Provider>
    );
    const inputField = getByTestId("textareainput");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "textarea");
    expect(inputField).not.toHaveAttribute("required");
  });

  it("renders an textarea field and required true", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <formik.Formik
          initialValues={{ fieldName: "" }}
          onSubmit={() => {}}
        >
          <formik.Form>
            <Fields
              label="textarea"
              name="textarea"
              type="textarea"
              value=""
              aria-labelledby="textarea"
              required={true}
            />
          </formik.Form>
        </formik.Formik>
      </Provider>
    );
    const inputField = getByTestId("textareainput");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "textarea");
    expect(inputField).toHaveAttribute("required");
  });
});
