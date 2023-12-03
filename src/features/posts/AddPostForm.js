import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postAdded } from "./addPostSlice";
//import { nanoid } from "@reduxjs/toolkit"; //available from toolkit to assign unique id

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onContentChanged = (event) => {
    setContent(event.target.value);
  };
  const onAuthorChanged = (event) => {
    setUserId(event.target.value);
  };

  const onSavePostClicked = (event) => {
    event.preventDefault();
    if (title && content && userId) {
      //dispatch(postAdded({ id: nanoid(), title, content }));
      //anything in postadded(reduce) wiuld be payload and can be accessed inside reducer by action.payload

      //we can use reducer and prepare in slice  to pass data easily to reducer fn.
      dispatch(postAdded(title, content, userId)); // now formatting will be handled in slice only //this data go to prepare method
    }

    setTitle("");
    setContent("");
    setUserId("");
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId); //shortcut to get tru or false

  return (
    <section>
      <form>
        <label htmlFor="postTitle"> Post Title :</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          {/* <option>user 1</option>
          <option>user 2</option> */}
          <option></option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        {/* //on disabled dont use  true or false directly */}
        <button type="submit" onClick={onSavePostClicked} disabled={!canSave}>
          Save post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
