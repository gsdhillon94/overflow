import { ACTIONS } from "../../data/websiteConsts";

const initialState = {
  userData: null,
};
const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.QUIZ_SUBMIT:
      return {
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default quizReducer;
