import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { MdMoreVert, MdDelete } from "react-icons/md";

const Post = ({ post, onDeletePost, onDeleteComment }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const handleCommentAdd = () => {
    if (newComment.trim() !== "") {
      const newCommentData = { id: Date.now(), text: newComment };
      setComments([newCommentData, ...comments]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((c) => c.id !== commentId));
    onDeleteComment(post.id, commentId);
    setShowMenu(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 relative">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-900 dark:text-white">
          {post.username}
        </h3>
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-600 dark:text-gray-300"
          >
            <MdMoreVert className="text-2xl" />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-700 border rounded shadow-lg">
              <button
                onClick={() => {
                  onDeletePost(post.id);
                  setShowMenu(false);
                }}
                className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 w-full"
              >
                Delete Post
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mt-2">{post.content}</p>
      <div className="flex justify-between items-center mt-3 text-gray-500">
        <button
          onClick={() => setLikes(likes + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <h1 className="flex gap-1">
            <AiFillLike className="text-2xl text-black" /> {likes} Likes
          </h1>
        </button>
      </div>

      <div className="mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white outline-none"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleCommentAdd}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Comment
        </button>
      </div>

      <div className="mt-3">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded my-1"
          >
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {comment.text}
            </p>
            <div className="relative">
              <button
                onClick={() =>
                  setSelectedComment(
                    comment.id === selectedComment ? null : comment.id
                  )
                }
                className="text-gray-600 dark:text-gray-300"
              >
                <MdMoreVert className="text-xl" />
              </button>
              {selectedComment === comment.id && (
                <div className="absolute right-0 w-32 bg-white dark:bg-gray-700 border rounded shadow-lg">
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="block px-2 py-1 text-sm text-red-600 hover:bg-red-100 w-full"
                  >
                    Delete Comment
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
