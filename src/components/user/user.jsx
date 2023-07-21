/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom"
import PostInput from "../formInput/postInput"
import Posts from "./posts"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import DeletePost from "./deletePost"

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
      <Posts posts={posts} users={users} activeUserID={activeUser.userID} setDeletePost={setDeletePost}/>
    </div>

  )
}

export default User