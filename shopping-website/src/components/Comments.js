import React, { useState } from "react";

function Comments({ productId, user }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const newComment = {
        user: user.name,
        comment,
        rating,
        photo,
        productId,
      };
      setComments([...comments, newComment]);
      setComment("");
      setRating(1);
      setPhoto(null);
    } else {
      alert("You need to be logged in to leave a comment.");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Comments for Product {productId}</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold">Upload Photo (Optional)</label>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Submit Comment
        </button>
      </form>

      {/* Display Comments */}
      <div className="mt-8">
        <h3 className="text-xl font-bold">Previous Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet for this product.</p>
        ) : (
          <ul className="divide-y">
            {comments.map((comment, index) => (
              <li key={index} className="py-4">
                <div className="font-semibold">{comment.user}</div>
                <div>Rating: {comment.rating} stars</div>
                <p>{comment.comment}</p>
                {comment.photo && <img src={URL.createObjectURL(comment.photo)} alt="Uploaded" className="mt-4" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Comments;
