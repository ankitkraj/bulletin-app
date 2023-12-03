import React from "react";
import { reactionAdded } from "./addPostSlice";

import { useDispatch } from "react-redux";

function ReactionButton({ post }) {
  const dispatch = useDispatch();

  const { id, reactions } = post;
  //   //reactions: {
  //     thumbsUp: 2,
  //     wow: 0,
  //     heart: 0,
  //     rocket: 0,
  //     coffee: 7,
  //   }
  const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };
  //this is assign emogi

  //   const emojiClicked = (id, name) => {
  //     dispatch(reactionAdded({ postId: id, reaction: name }));
  //   };

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        type="button"
        key={name}
        className="reactionButton"
        onClick={() => dispatch(reactionAdded({ postId: id, reaction: name }))}
        // onClick={emojiClicked}
      >
        {emoji} {reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
}

export default ReactionButton;
