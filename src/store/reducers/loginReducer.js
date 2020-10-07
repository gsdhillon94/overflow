import firebase from "../../firebase/firebaseConfig";

const initialState = {
  loading: false,
  user: "",
  error: "",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USER":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default loginReducer;

export const signinUser = (state) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_USER" });
    firebase
      .auth()
      .signInWithEmailAndPassword(state.email, state.password)
      .then((res) => {
        console.log(res);
        dispatch({ type: "FETCH_USER", payload: state.email });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: "ERROR", payload: e });
      });
  };
};
