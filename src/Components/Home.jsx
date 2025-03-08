// import { useState } from "react";
// import Post from "./Post";
// const Home = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       username: "React",
//       content: "Hello Connect !",
//       likes: 2,
//       comments: ["Javascript"],
//     },
//   ]);
//   const [newPost, setNewPost] = useState("");

//   const handleAddPost = () => {
//     if (newPost.trim() !== "") {
//       const newPostData = {
//         id: posts.length + 1,
//         username: "You",
//         content: newPost,
//         likes: 0,
//         comments: [],
//       };
//       setPosts([newPostData, ...posts]);
//       setNewPost("");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
//         <textarea
//           value={newPost}
//           onChange={(e) => setNewPost(e.target.value)}
//           className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white outline-none"
//           placeholder="What's on your mind?"
//         />
//         <button
//           onClick={handleAddPost}
//           className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-600 transition w-full"
//         >
//           Add Post
//         </button>
//       </div>
//       {posts.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default Home;
import { useState } from "react";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "React",
      content: "Hello Connect!",
      likes: 2,
      comments: [{ id: 1, text: "Javascript" }],
    },
  ]);
  const [newPost, setNewPost] = useState("");

  const handleAddPost = () => {
    if (newPost.trim() !== "") {
      const newPostData = {
        id: posts.length + 1,
        username: "You",
        content: newPost,
        likes: 0,
        comments: [],
      };
      setPosts([newPostData, ...posts]);
      setNewPost("");
    }
  };

  // Delete post function
  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // Delete comment function
  const handleDeleteComment = (postId, commentId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter((c) => c.id !== commentId),
            }
          : post
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white outline-none"
          placeholder="What's on your mind?"
        />
        <button
          onClick={handleAddPost}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-600 transition w-full"
        >
          Add Post
        </button>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onDeletePost={handleDeletePost}
          onDeleteComment={handleDeleteComment}
        />
      ))}
    </div>
  );
};

export default Home;
