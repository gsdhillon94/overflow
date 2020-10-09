import React, { useState } from "react";
import { connect } from "react-redux";
import { addBlog, getBlogs } from "../store/reducers/blogReducer";

function AddBlogs(props) {
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    if (e.target.name !== "blogImage") {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    } else {
      setState({
        ...state,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  const handleBlogSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    props.addBlog(state);
  };
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
    console.log(e.target.files[0]);
  };
  return (
    <div className="section">
      <div className="section-heading">
        <h2>Add a Blog</h2>
      </div>
      <div>
        <form onSubmit={handleBlogSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={props.numberOfBlogs.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="blogContent">Blog Content</label>
            <textarea
              id="blogContent"
              name="content"
              value={props.numberOfBlogs.content}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="file"
              name="blogImage"
              value={props.numberOfBlogs.image}
              onChange={handleImageAsFile}
            />
            <div className="card-container">
              <img src={imageAsFile} />
            </div>
          </div>
          <div>
            <button>submit</button>
          </div>
        </form>
      </div>
      <div>
        <button onClick={props.getBlogs}>Get Blogs</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numberOfBlogs: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // addBlog: (state) => dispatch({ type: "ADD_BLOG", payload: state }),
    addBlog: (state) => dispatch(addBlog()),
    getBlogs: () => dispatch(getBlogs()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddBlogs);
