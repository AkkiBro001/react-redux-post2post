import { useNavigate, useParams } from "react-router-dom"
import PostInput from "../formInput/postInput"
import Posts from "./posts"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const User = () => {
  const {id} = useParams()
  const users = useSelector(state => state.users);
  const navigate = useNavigate()
  const activeUser = users.find(user => user.isLogged)
  
  
  useEffect(()=>{
    

    if(!activeUser || activeUser.userID !== parseInt(id)){
      navigate('/user/notfound')
    }
  }, [id])

  if(activeUser?.userID !== parseInt(id)){
    return null
  }

  return (
    
    <div>
        <PostInput/>
        <Posts/>
    </div>

  )
}

export default User