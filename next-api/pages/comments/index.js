import React, { useState } from "react"

const CommentsPage = () => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")

  const fetchComments = async () => {
    const response = await fetch("/api/comments")
    const data = await response.json()
    // console.log(data)
    setComments(data)
  }

  const submitComment = async () => {
    const response = await fetch("api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = response.json()
    console.log(data)
  }

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => (
        <h2 key={comment.id}>
          {comment.id} {comment.text}
        </h2>
      ))}
    </div>
  )
}

export default CommentsPage
