// import React from 'react';
// import { useParams } from 'react-router-dom';
// import blogData from '../data/blogData';

// const BlogDetail = () => {
//   const { id } = useParams();
//   const post = blogData.find((post) => post.id === id);

//   if (!post) return <p>Blog post not found.</p>;

//   return (
//     <div className="blog-detail">
//       <h1>{post.title}</h1>
//       <p>By {post.author} on {post.date}</p>
//       <img src={post.imageUrl} alt={post.title} />
//       <p>{post.content}</p>
//     </div>
//   );
// };

// export default BlogDetail;
