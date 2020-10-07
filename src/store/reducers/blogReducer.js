const initialState = {
  numberOfBlogs: 0,
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      console.log("blog added", action.payload);
      state.initialState += 1;
      return state;
    case "BLOG_ERROR":
      console.log("errooor here blog");
      return state;
    default:
      return state;
  }
};

export default blogReducer;
