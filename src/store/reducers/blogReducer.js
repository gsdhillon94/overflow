import { db } from "../../firebase/firebaseConfig";
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
export const addBlog = () => {
  return () => {
    db.collection("blogs")
      .add({
        title: "Blog 3",
        content: "Lorem ipsum 3",
        cat: "SEO",
      })
      .then(function (docRef) {
        console.log(docRef, "response");
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };
};

export const getBlogs = () => {
  return () => {
    db.collection("blogs")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });
  };
};

export const saveImage = (file) => {
  return () => {};
};
