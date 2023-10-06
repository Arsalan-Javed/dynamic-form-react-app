import React, { useEffect } from "react";
import { ErrorMessage, FieldConfig, useField } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { INITIAL_STATE, updateField } from "../../../app/formSlice";

interface TextFieldProps extends FieldConfig {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
}

export const Fields: React.FC<TextFieldProps> = ({
  label,
  name,
  type,
  value,
  placeholder,
  required,
  options,
}) => {
  const data = {
    label,
    name,
    type,
    value,
    options,
    required,
    placeholder,
  };
  const dispatch = useDispatch();
  const form = useSelector(
    (state: { form: typeof INITIAL_STATE }) => state.form
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    dispatch(updateField({ field: name, value: e.target.value }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    field.onChange(e);
    dispatch(updateField({ field: name, value: e.target.value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    field.onChange(e);
    dispatch(updateField({ field: name, value: e.target.value }));
  };

  const [field, meta] = useField(data);

  useEffect(() => {
    if (type === "select" && !form[name]) {
      const opt = options ? options[0] : "";
      dispatch(updateField({ field: name, value: opt }));
    }
  }, [type]);

  return (
    <div className="mb-4" key={name}>
      <label htmlFor={field.name}>{label}</label>
      {type === "text" || type === "email" || type === "number" ? (
        <input
          id={name}
          data-testid={name + "input"}
          className={`form-control shadow-none ${
            meta.touched && meta.error && "is-invalid"
          }`}
          {...field}
          {...data}
          autoComplete="off"
          required={required}
          onChange={handleInputChange}
        />
      ) : type === "textarea" ? (
        <textarea
          data-testid={name + "input"}
          className={`form-control shadow-none ${
            meta.touched && meta.error && "is-invalid"
          }`}
          {...field}
          {...data}
          autoComplete="off"
          rows={4}
          required={required}
          onChange={handleTextAreaChange}
        />
      ) : type === "select" ? (
        <select
          data-testid={name + "input"}
          className={`form-control shadow-none ${
            meta.touched && meta.error && "is-invalid"
          }`}
          {...field}
          {...data}
          autoComplete="off"
          required={required}
          onChange={handleSelectChange}
        >
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : null}
      <ErrorMessage
        data-testid={name + "-error"}
        component="div"
        name={field.name}
        className={"error"}
      />
    </div>
  );
};
