import firebase, { db, storage } from "../../firebase/firebaseConfig";
import { ACTIONS } from "../../data/websiteConsts";
const initialState = {
  loading: false,
  message: "",
  data: [],
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SEND:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.SUCCESS:
      return {
        message: action.payload,
        loading: false,
      };
    case ACTIONS.ERROR:
      return {
        loading: false,
        message: action.payload,
      };
    case ACTIONS.SEND_IMAGE:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.IMAGE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ACTIONS.GET_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
export const addBlog = (data) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.SEND });
    db.collection("blogs")
      .doc(data.bTitle)
      .set(data)
      .then(function () {
        dispatch({
          type: ACTIONS.SUCCESS,
          payload: "Blog Submitted Successfully",
        });
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        dispatch({ type: ACTIONS.ERROR, payload: error });
      });
  };
};

export const getBlogs = () => {
  var data = [];
  console.log("object check");
  return (dispatch) => {
    dispatch({ type: ACTIONS.SEND });
    db.collection("blogs")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          console.log(doc.data());
          data.push(doc.data());
        });
      });
    dispatch({ type: ACTIONS.GET_BLOG_SUCCESS, payload: data });
  };
};
export const sendImage = (imageFile, name) => {
  console.log(imageFile, "file");
  return (dispatch) => {
    var storageRef = storage.ref();
    var imgRef = storageRef.child(name);

    dispatch({ type: ACTIONS.SEND_IMAGE });
    // imgRef.putString(imageFile.image).then(function (snapshot) {
    //   dispatch({ type: ACTIONS.IMAGE_POST_SUCCESS });
    //   console.log(snapshot);
    // });
    var metadata = {
      contentType: "image/png",
    };

    // Upload the file and metadata
    var uploadTask = storageRef.child(name).put(imageFile.image, metadata);
  };
};
