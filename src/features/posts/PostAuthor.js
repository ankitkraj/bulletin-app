import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function PostAuthor({ id }) {
  //we will get all the user and match from id passed through parent
  //if id passed through parent matches then display name else display unknown

  const users = useSelector((state) => state.users);
  //   console.log("users from slice in post component", users);

  const author = users.find((user) => user.id === id);

  return <span>by {author ? author.name : "Unknown author"}</span>;
}

export default PostAuthor;
