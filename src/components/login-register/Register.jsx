import React, { useContext, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/actions/actions";
import { UserContext } from "../context/userContext";

const Register = () => {
  const connected = useSelector((state) => state.auth.isConnected);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { modalState, toggleModals } = useContext(UserContext);

  const [validation, setvalidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      email: inputs.current[0].value,
      firstname: inputs.current[1].value,
      lastname: inputs.current[2].value,
      password: inputs.current[3].value,
    };
    
    dispatch(registerUser(data));

    if (inputs.current[3].value.length < 8) {
      setvalidation("8 caractères minimum svp");
      return;
    }
  };

  useEffect(()=>{
    if(connected){
      toggleModals('close')
      navigate('/shoesman')
    }
  }, [connected])

  return (
    <>
      {modalState.registerModal && (
        <div className="containerModal">
          <div onClick={() => toggleModals("close")} className="overlay"></div>

          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="title-modal">S'enregistrer</h3>
                <button
                  onClick={() => toggleModals("close")}
                  id="btnClose"
                  type="btn"
                >
                  X
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleForm} className="Register-form">
                  <div className="containerRegister">
                    <label htmlFor="RegisterEmail">Email</label>
                    <input
                      ref={addInputs}
                      type="email"
                      name="email"
                      className="formControl"
                      id="RegisterEmail"
                      placeholder="email"
                    />
                  </div>
                  <div className="containerRegister">
                    <label htmlFor="firstname">Firstname</label>
                    <input
                      ref={addInputs}
                      type="txt"
                      name="firstname"
                      className="formControl"
                      id="firstname"
                      placeholder="firstname"
                    />
                  </div>
                  <div className="containerRegister">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      ref={addInputs}
                      type="txt"
                      name="lastname"
                      className="formControl"
                      id="lastname"
                      placeholder="lastname"
                    />
                  </div>
                  <div className="containerRegister">
                    <label htmlFor="RegisterEPwd">Password</label>
                    <input
                      ref={addInputs}
                      type="password"
                      name="pwd"
                      className="formControl"
                      id="RegisterEPwd"
                      placeholder="password"
                    />
                    <p className="txtValid" style={{ color: "red" }}>
                      {validation}
                    </p>
                  </div>
                  <button className="loginSubmit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
