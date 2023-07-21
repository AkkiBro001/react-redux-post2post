import { useDispatch, useSelector } from "react-redux"
import { deletePost } from "../../app/features/posts"
import { useEffect } from "react"
/* eslint-disable react/prop-types */
const DeletePost = ({setDeletePost, deletePostID}) => {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  function handleDeletePost(){
    dispatch(deletePost(deletePostID))
    setDeletePost("")
  }

  useEffect(()=>{
    localStorage.setItem('posts',JSON.stringify(posts))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletePostID])

  return (
    <div className="absolute w-full h-full top-0 left-0 z-[100] p-4 backdrop-blur-sm" style={{backgroundColor:'rgba(0,0,0,0.6)'}}>
       <div className="max-w-[300px] w-full rounded-lg overflow-hidden top-[250px] mx-auto bg-white text-black sticky">
            <p className="px-3 py-5 text-lg md:text-xl text-center">Are you sure you want to delete this post?</p>
            <div className="flex gap-[2px]">
                <button className="px-3 py-3 flex-1 text-lg md:text-xl bg-red-700 text-white font-bold"
                onClick={handleDeletePost}
                >Yes</button>
                <button className="px-3 py-3 flex-1 text-lg md:text-xl bg-slate-600 text-white font-bold"
                onClick={()=>setDeletePost("")}
                >No</button>
            </div>
       </div>
    </div>
  )
}

export default DeletePost