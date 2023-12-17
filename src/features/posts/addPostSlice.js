import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 2,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 7,
    },
  },

  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postAdded(state, action) { // postAdded : (state, action) {
    //   // format is the way we write function
    //   state.push(action.payload);
    // },

    //we can use reducer and prepare in slice to format the data
    //postAdded with take reducer and prepare

    postAdded: {
      reducer(state, action) {
        state.push(action.payload); //this payload would be returned from prepare method
      },

      //prepare will return the payload (in same format in which we want data)
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },

    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export default postSlice.reducer; // this would be needed in store
export const { postAdded, reactionAdded } = postSlice.actions; // this would be needed in components

// export const selectAllPosts = (state) => state.posts;
// this we can create to modularize the code so if structure is changed of slice only here it is need to be changed
//no need to change every component
