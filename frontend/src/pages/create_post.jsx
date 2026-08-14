import React from 'react'
import axios from 'axios' 
import {useNavigate} from 'react-router-dom'
function Create_post() {

  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    // Fixed the typo here: preventDefault()
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post("http://localhost:3000/create-post", formData)
      .then((res) => {
        console.log(res);
        navigate("/feed")
      })
      .catch((err) => {
        console.error("Error creating post:", err);
      });
  }

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={handlesubmit}>
        <input type="file" name="image" accept="image/*" />
        <input type="text" name="caption" placeholder="Put your caption here" required />
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Create_post;