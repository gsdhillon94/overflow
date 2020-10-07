import React, { useState } from "react";
import { connect } from "react-redux";
function AddBlogs(props) {
  const [state, setState] = useState({
    title: "",
    content: "",
    blogImage: null,
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

  return (
    <div className="section">
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
            onChange={handleChange}
          />

          <img src={state.blogImage} />
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
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
    addBlog: (state) => dispatch({ type: "ADD_BLOG", payload: state }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddBlogs);
