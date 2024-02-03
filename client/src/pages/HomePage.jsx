import React from 'react'
import PostCard from '../components/PostCard'
import PostList from '../components/PostList'
 
const HomePage = () => {
  return (
    <div className="text-1xl font-bold underline text-blue-500">
        <h1 >
          Hello Home Page
          <PostCard />
        </h1>
    </div>
  )
}

export default HomePage