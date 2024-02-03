// // PostList.jsx
// import React from 'react';
// import PostCard from './PostCard';  // PostCard bileşenini içeri al
// import usePostList from '../hooks/usePostList';

// const PostList = () => {
//   const { posts, loading, error } = usePostList();

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Post List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {posts.map(post => (
//           <PostCard
//             key={post._id}
//             post={post}
//             onEdit={/* Pass your onEdit function here */}
//             onDelete={/* Pass your onDelete function here */}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PostList;
