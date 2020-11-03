import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import blogReducer from "./reducers/blogReducer";
import loginReducer from "./reducers/loginReducer";
import quizReducer from "./reducers/quizReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  blog: blogReducer,
  login: loginReducer,
  quiz: quizReducer,
});

export default rootReducer;
