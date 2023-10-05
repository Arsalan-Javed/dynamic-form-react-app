import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Fields } from "./Fields";
import { useDispatch, useSelector } from "react-redux";
import { INITIAL_STATE, resetForm } from "../app/formSlice";
import { data } from "./field-set";
import { useNavigate } from "react-router-dom";
import { FormElement } from "./interfaces";

const DynamicForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useSelector(
    (state: { form: typeof INITIAL_STATE }) => state.form
  );

  const handleReset = () => {
    dispatch(resetForm());
  };

  const onFormSubmit = (formik: any) => {
    if (!Object.keys(formik.errors).length && Object.keys(form).length > 1) {
      console.log("Form submitted with values:", form);
      navigate("/thanks");
    } else {
      console.log(form);
      console.log("Form has validation errors");
    }
  };

  const generateValidationSchema = (data: any) => {
    const schema: { [key: string]: any } = {};
    data.forEach((element: any) => {
      if (Array.isArray(element)) {
        element.forEach((subElement: FormElement) => {
          if (subElement.required) {
            schema[subElement.id] = Yup.string().required("Required");
          }
        });
      } else if (element.required) {
        schema[element.id] = Yup.string().required("Required");
      }
    });
    return Yup.object(schema);
  };

  const validationSchema = generateValidationSchema(data);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="text-center mb-5">
            <h1>Dynamic Form</h1>
            <div className="form text-start mt-5">
              <Formik
                initialValues={form}
                validationSchema={validationSchema}
                onSubmit={() => {}}
              >
                {(formik) => (
                  <div>
                    <Form>
                      <>
                        {data.map((element, index) => (
                          <div className="row" key={index}>
                            {Array.isArray(element) ? (
                              element.map((subElement: any) => {
                                return (
                                  <div className="col-md">
                                    <Fields
                                      key={subElement.id}
                                      label={subElement.id}
                                      name={subElement.id}
                                      type={subElement.type}
                                      value={form[subElement.id]}
                                      placeholder={subElement.placeholder || ""}
                                      required={subElement.required || ""}
                                    />
                                  </div>
                                );
                              })
                            ) : (
                              <div key={element.id}>
                                <Fields
                                  label={element.id}
                                  name={element.id}
                                  type={element.type}
                                  value={form[element.id]}
                                  placeholder={element.placeholder || ""}
                                  required={element.required || false}
                                  options={element.options || []}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </>
                      <button
                        className="btn btn-success mt-3"
                        onClick={() => onFormSubmit(formik)}
                      >
                        Submit
                      </button>
                      <button
                        className="btn btn-danger ms-3 mt-3 ml-3"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default DynamicForm;
