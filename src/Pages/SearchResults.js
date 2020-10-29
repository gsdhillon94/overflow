import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogList from "../components/blog/BlogList";
import { db } from "../firebase/firebaseConfig";

function SearchResults() {
  let params = useParams();
  let blogData = [];
  const [state, setstate] = useState({
    loading: true,
    data: [],
  });

  const getBlogsData = () => {
    let that = this;
    let data = {};
    db.collection("blogs")
      .where("bCat", "==", params.searchQuery)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          data = doc.data();
          blogData.push(data);
          setstate({
            loading: false,
            data: blogData,
          });
        });
      });
  };

  useEffect(() => {
    getBlogsData();
  }, [params]);
  return (
    <div className="">
      {state.loading ? (
        <img className="center" src={require("../images/loading.gif")}></img>
      ) : (
        <BlogList data={state.data} />
      )}
    </div>
  );
}
export default SearchResults;
