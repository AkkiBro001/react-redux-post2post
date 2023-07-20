import { useNavigate, useParams } from "react-router-dom"
import PostInput from "../formInput/postInput"
import Posts from "./posts"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const User = () => {
  const { id } = useParams()
  const users = useSelector(state => state.users);
  const posts = useSelector(state => state.posts);
  const navigate = useNavigate()
  const activeUser = users.find(user => user.isLogged)
  
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
      <PostInput userID={activeUser.userID}/>
      <Posts posts={posts} users={users} activeUserID={activeUser.userID}/>
    </div>

  )
}

export default User