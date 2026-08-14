import React, { useState,useEffect } from 'react';
import axios from 'axios';
const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn15ewMAU5qwPbP9MDtdTNyeUJOT5sfo4_0zd7Oev73FvISGn9mYcdjr2qu-LpiEuQ6kGS6kbF8TKJo_vBYkgk5cR1PS_CFnQh4Vaed76AmQ&s=10",
      caption: "spider_man"
    }
  ]);

  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPosts(res.data.posts)
    })
  })

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        // Use .map() to loop through the array and render each post
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </section>
  );
};

export default Feed;