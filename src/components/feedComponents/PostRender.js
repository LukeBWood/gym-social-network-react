import React from "react";
import Post from "../feedComponents/Post";

function PostRender({ posts }) {
  return (
    <div className="flex flex-col items-center w-full basis-0.7 mt-2 rounded-md">
      {posts.map((post) => (
        <Post
          key={post._id}
          user={post.creator.username}
          likes={post.likeCount}
          caption={post.postMessage}
          picture="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        />
      ))}
    </div>
  );
}

export default PostRender;
