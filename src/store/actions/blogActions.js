// export const addTask = (task) => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firestore = getFirebase().firestore();
//     // const authorId = getState().firebase.auth.uid;
//     firestore
//       .collection("tasks")
//       .add({
//         ...task,
//         // authorId: authorId,
//         date: new Date(),
//       })
//       .then(() => {
//         dispatch({
//           type: "ADD_TASK",
//           task,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: "ERROR",
//           err,
//         });
//       });
//   };
// };
export const addBlog = {
  type: "ADD_BLOG",
  payload: { blog: { title: "", content: "" } },
};
