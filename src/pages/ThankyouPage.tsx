import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { INITIAL_STATE } from "../app/formSlice";
import { data } from "./field-set";

const ThankyouPage = () => {
  const navigate = useNavigate();
  const form = useSelector(
    (state: { form: typeof INITIAL_STATE }) => state.form
  );

  const goBackToFrom=()=>{
    navigate('/')
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="text-center">
              <h1>Thank You</h1>
            </div>
            <div className="text-start">
              <>
                {data.map((element, index) => (
                  <div className="row" key={index}>
                    {Array.isArray(element) ? (
                      element.map((subElement: any) => {
                        return (
                          <div className={form[subElement.id] ? 'col-auto mb-2' : 'd-none'} key={subElement.id}>{form[subElement.id]}</div>
                        );
                      })
                    ) : (
                      <div className={form[element.id] ? 'col-auto mb-2' : 'd-none'} key={element.id}>{form[element.id]}</div>
                    )}
                  </div>
                ))}
              </>
            </div>
            <button
              className="btn btn-success mt-3"
              onClick={goBackToFrom}
            >
              Goto Home
            </button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPage;
