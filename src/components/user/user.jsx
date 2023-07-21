/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom"
import PostInput from "../formInput/postInput"
import Posts from "./posts"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import DeletePost from "./deletePost"
import {MdEditDocument} from "react-icons/md";

const User = () => {
  const { id } = useParams()
  const users = useSelector(state => state.users);
  const posts = useSelector(state => state.posts);
  const navigate = useNavigate()
  const activeUser = users.find(user => user.isLogged)
  const [deletePost, setDeletePost] = useState("")
  
  

  useEffect(()=>{
    localStorage.setItem('posts',JSON.stringify(posts))
  },[posts])
  

  useEffect(() => {
    if (!activeUser || activeUser.userID !== parseInt(id)) {
      navigate('/user/notfound')
    }
  }, [id])

  if (activeUser?.userID !== parseInt(id)) {
    return null
  }

  return (

    <div>
      {deletePost && <DeletePost setDeletePost={setDeletePost} deletePostID={deletePost}/>}
      <PostInput userID={activeUser.userID}/>
      {
        posts.length ? 
        <Posts posts={posts} users={users} activeUserID={activeUser.userID} setDeletePost={setDeletePost}/>
        :
        <h2 className="mt-10 sm:mt-12 flex flex-col items-center">
          <MdEditDocument className="text-6xl sm:text-8xl"/> 
          <span className="text-3xl sm:text-4xl">No Post Available</span>
          <span className="italic text-lg">Create your first post</span>
        </h2>
      }
    </div>

  )
}

export default User