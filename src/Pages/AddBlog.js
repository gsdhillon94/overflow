import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addBlog, getBlogs, sendImage } from "../store/reducers/blogReducer";
import { BLOG_CATEGORIES } from "../data/websiteConsts";
import "./addblog.css";
function AddBlog(props) {
  const [addNewDataDisabled, setAddNewDataDisabled] = useState(false);
  var fileInput;
  const [counter, setCounter] = useState(0);
  const [blogImg, setBlogImg] = useState({
    image: require("../images/image.png"),
    name: "",
  });

  const [blogData, setBlogData] = useState({
    bTitle: "",
    bContent: [],
    bCat: "",
    bImg: require("../images/image.png"),
  });

  const selectImage = () => {
    fileInput.click();
  };
  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContentChange = (e) => {
    if (e.target.value != "") {
      setAddNewDataDisabled(false);
    }
    let temp = { ...blogData };
    console.log(temp, "temp in hendle content chnage");
    temp.bContent.map((item) => {
      console.log(item);
      if (e.target.name != "image") {
        if (item.key === e.target.id) {
          item.value = e.target.value;
        }
      } else {
        if (item.key === e.target.id) {
          // item.value = URL.createObjectURL(e.target.files[0]);

          fileToDataUri(e.target.files[0]).then((dataUri) => {
            item.value = dataUri;
          });
        }
      }
    });

    setBlogData({
      ...blogData,
      bContent: [...temp.bContent],
    });
  };

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const handleImageChange = (e) => {
    var name;
    var file;
    var type;

    if (e.target.files[0]) {
      file = e.target.files[0];
      name = e.target.files[0].name;
      type = e.target.files[0].type;
      console.log(file);
      fileToDataUri(file).then((dataUri) => {
        setBlogData({
          ...blogData,
          bImg: dataUri,
        });
      });
      // saveImage(blogImg, name);
    }
  };

  const saveImage = (file, name) => {
    props.sendImage(file, name);
  };

  const addBlogData = (e) => {
    console.log(e.target.name);
    if (e.target.name) {
      setCounter(counter + 1);
      var temp = { ...blogData };
      temp.bContent.push({
        inputType: e.target.name,
        value: "",
        key: e.target.name + counter,
      });
      setBlogData({
        ...temp,
      });
      setAddNewDataDisabled(true);
    }
  };
  const handleDeleteContent = (i) => {
    console.log(i, "index of deleting object");
    let temp = [...blogData.bContent];
    temp.splice(i, 1);
    setBlogData({
      ...blogData,
      bContent: temp,
    });
    setAddNewDataDisabled(false);
  };

  const submitBlog = () => {
    props.addBlog(blogData);
  };

  const handleCategoryChange = (e) => {
    let value = e.target.value;
    setBlogData({
      ...blogData,
      bCat: value,
    });
  };
  // useEffect(() => {}, [blogData]);
  return props.loading ? (
    <div className="loading">
      <img src={require("../images/loading.gif")} />
    </div>
  ) : (
    <div className="section no-flex">
      <h2>Add a Blog</h2>

      <div className="blog-head-image">
        <img src={blogData.bImg} />
      </div>

      <div className="button-container">
        <button className="btn primary-blue" onClick={selectImage}>
          Add Blog Image
        </button>
      </div>

      <input
        type="file"
        className="hidden"
        name="blogHeadImage"
        ref={(input) => (fileInput = input)}
        onChange={handleImageChange}
      />

      <div className="addblog-header">
        <input
          type="text"
          placeholder="Add Blog Title here"
          name="bTitle"
          onChange={handleChange}
        />

        <select
          className="no-border blog-select"
          value={blogData.bCat}
          onChange={handleCategoryChange}
        >
          <option value="">Select Blog Category</option>
          {BLOG_CATEGORIES.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      {blogData.bContent.map((item, index) => {
        if (item.inputType === "heading") {
          return (
            <div key={item.key}>
              <input
                id={item.key}
                type="text"
                placeholder="Add content here Title here"
                name="heading"
                className="blog-subheading"
                onChange={handleContentChange}
              />
              <i
                className="fas fa-trash"
                onClick={() => handleDeleteContent(index)}
              ></i>
            </div>
          );
        }
        if (item.inputType === "content") {
          return (
            <div key={item.key}>
              <textarea
                type="text"
                id={item.key}
                placeholder="Add content "
                name="content"
                className="blog-subcontent"
                onChange={handleContentChange}
              />
              <i
                className="fas fa-trash"
                name={item.key}
                onClick={() => handleDeleteContent(index)}
              ></i>
            </div>
          );
        }
        if (item.inputType === "image") {
          return (
            <div key={item.key} className="blog-subimage">
              <input
                type="file"
                id={item.key}
                name="image"
                onChange={handleContentChange}
              />
              <img src={item.value} />
              <i
                className="fas fa-trash"
                name={item.key}
                onClick={() => handleDeleteContent(index)}
              ></i>
            </div>
          );
        }
      })}
      <div className="section nopad-t nopad-b no-min-height">
        <button
          className="btn"
          name="content"
          onClick={addBlogData}
          disabled={addNewDataDisabled}
        >
          <i className="fas fa-plus-square icon-margin"></i> Content
        </button>

        <button
          className="btn"
          name="heading"
          onClick={addBlogData}
          disabled={addNewDataDisabled}
        >
          <i className="fas fa-plus-square icon-margin"></i> Heading
        </button>

        <button
          className="btn"
          name="image"
          onClick={addBlogData}
          disabled={addNewDataDisabled}
        >
          <i className="fas fa-plus-square icon-margin"></i> Image
        </button>
      </div>
      <div>
        <button
          className="btn post"
          onClick={submitBlog}
          disabled={blogData.bTitle == "" && blogData.bCat == "" ? true : false}
        >
          Post Blog
        </button>
        {props.message != "" ? (
          <p className="success-message">{props.message}</p>
        ) : (
          ""
        )}
      </div>
      <button onClick={props.getBlogs}>Get Blogs</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.blog.loading,
    message: state.blog.message,
    data: state.blog.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // addBlog: (state) => dispatch({ type: "ADD_BLOG", payload: state }),
    addBlog: (data) => dispatch(addBlog(data)),
    sendImage: (image, name) => dispatch(sendImage(image, name)),
    getBlogs: () => dispatch(getBlogs()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddBlog);
