import React, { useContext, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/actions/actions";
import { UserContext } from "../context/userContext";





const Login = () => {

  const connected = useSelector(state=>state.auth.isConnected);
  const dispatch = useDispatch();
  const { modalState, toggleModals } = useContext(UserContext);

  const [validation, setvalidation] = useState('');
  const navigate = useNavigate();
  const inputs = useRef([])
  const addInputs = el =>{
    if(el && !inputs.current.includes(el)){
        inputs.current.push(el)
    }
  }

  const handleForm = e =>{
    e.preventDefault()
    const data = {
      credential: inputs.current[0].value,
      password: inputs.current[1].value
    }
    dispatch(loginUser(data));
  }

  useEffect(()=>{
    if(connected){
      toggleModals('close')
      navigate('/')
    }
  }, [connected])




  return (
    <>
    {modalState.loginModal && (

    
      <div className="containerModal">
        <div onClick={()=> toggleModals('close')} className="overlay">
        </div>

          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="title-modal">Se connecter</h3>
                <button onClick={()=> toggleModals('close')} id="btnClose" type="btn">
                  X
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleForm} className="login-form">
                  <div className="containerLogin">
                    <label htmlFor="loginEmail">Email</label>
                    <input ref={addInputs}
                      type="email"
                      name="email"
                      className="formControl"
                      id="loginEmail"
                      placeholder="email"
                    />
                  </div>
                  <div className="containerLogin">
                    <label htmlFor="loginEPwd">Password</label>
                    <input ref={addInputs}
                      type="password"
                      name="pwd"
                      className="formControl"
                      id="loginEPwd"
                      placeholder="password"
                    />
                    <p className="txtValid" style={{ color: "red" }}>
                      {validation}
                    </p>
                  </div>
                  <button type="submit" className="loginSubmit">Submit</button>
                </form>
              </div>
            </div>
          </div>
      </div>
      )}
    </>
  );
};

export default Login;
