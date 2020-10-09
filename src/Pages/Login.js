import React, { useState, useEffect } from "react";
import "./login.css";
import store from "../store";
import { connect } from "react-redux";
import { signinUser } from "../store/reducers/loginReducer";
function Login(props) {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [state, setState] = useState({
    loggedIn: false,
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (state.email != "" && state.password != "") {
      setBtnDisabled(false);
    }
  };

  const loginUser = (e) => {
    e.preventDefault();
    props.login(state);
  };

  return props.loading ? (
    <div className="loading">
      {" "}
      <img src={require("../images/loading.gif")} />
    </div>
  ) : (
    <div className="section">
      <div className="card center">
        <form onSubmit={loginUser}>
          <div className="logo-container">
            <img src={require("../images/logo.png")} />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              id="loginEmail"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              id="loginPassword"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <button
              type="submit"
              className="btn primary-blue"
              disabled={btnDisabled}
            >
              Login
            </button>
          </div>
        </form>
        {props.error != "" ? (
          <p className="warning">invalid credentials</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    loading: state.login.loading,
    error: state.login.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (state) => {
      dispatch(signinUser(state));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
