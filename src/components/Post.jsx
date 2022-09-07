import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";

import post from "../api/post";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

export const Post = () => {

  
  const { allPost, setAllPost ,fetch,setFetch} = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);
  const { darkTheme } = useContext(ThemeContext);

  const fetchAllPost = async () => {
    const result = await post.getPost();
    if (result.status === 200) {
      setAllPost(result.data.reverse());
    }
  };

  const like = async (id) => {
    await post.like(id);
  };
  const unLike = async (id) => {
    await post.unLike(id);
  };

  const handleLike = (post) => {
    setFetch(true);
    if (post.likes.indexOf(currentUser._id) === -1) {
      like(post._id);
    } else {
      unLike(post._id);
    }
  };

  const handleRemovePost = async (postId) => {
    setFetch(true);
    await post.removePost(postId);
  };

  const handleComment = async (postId, text) => {
    if (!text) return;
    setFetch(true);
    await post.comment(postId, text);
  };

  useEffect(() => {
    fetchAllPost();
    return () => setFetch(false);
  }, [fetch]);




  return (
    <>
      {allPost.map((post) => (
        <Card
          key={post._id}
          caption={post.caption}
          image={post.image}
          postedBy={post.postedBy}
          liked={post.liked}
          handleLike={handleLike}
          post={post}
          handleRemovePost={handleRemovePost}
          comments={post.comments}
          handleComment={handleComment}
          darkTheme={darkTheme}
          time={post.createdAt}
        />
      ))}
    </>
  );
};
