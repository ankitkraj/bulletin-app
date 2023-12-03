import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

function PostList() {
  const posts = useSelector((state) => state.posts);
  //   const posts = useSelector(selectAllPosts)

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date)); //to make ordered post

  const renderedList = orderedPosts.map((item) => (
    <article key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>

      {/* <PostAuthor id={item.userId} /> */}
      <p className="postCredit">
        <PostAuthor id={item.userId} />
        <TimeAgo timestamp={item.date} />
      </p>

      {/* // we will create reaction components */}
      <ReactionButton post={item} />
    </article>
  ));

  return (
    <section>
      <h2>List of posts</h2>
      {renderedList}
    </section>
  );
}

export default PostList;
