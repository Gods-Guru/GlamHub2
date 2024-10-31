// // src/components/BlogList.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import blogData from '../data/blogData';

// const BlogList = () => (
//   <div className="blog-list">
//     <h1>Our Blog</h1>
//     {blogData.map((post) => (
//       <div key={post.id} className="blog-preview">
//         <h2>{post.title}</h2>
//         <p>By {post.author} on {post.date}</p>
//         <p>{post.content.slice(0, 100)}...</p>
//         <Link to={`/blog/${post.id}`}>Read more</Link>
//       </div>
//     ))}
//   </div>
// );

// export default BlogList;
