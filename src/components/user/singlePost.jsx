/* eslint-disable react/prop-types */
import {AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike, AiFillEdit, AiFillDelete} from "react-icons/ai"
import { TimeAgo, titleCase } from "../../utils/utils"
import { likePost, dislikePost, editPost } from "../../app/features/posts"
import { useDispatch } from "react-redux"
import { useRef, useState } from "react"

const SinglePost = ({postID, userID, date, disLikeCount, likeCount, post, postDislikeByUser, postLikeByUser, isEditedPost, userName, activeUserID, setDeletePost}) => {
    
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const editTextRef = useRef()

  function handleEditNote(post, postID){
   
    if(post){
        dispatch(editPost({post, postID}))
        setIsEdit(false)
    }
  }

  return (
    <article>
        <section className="flex gap-4">
            <div className="select-none rounded-full w-[35px] h-[35px] invert-theme flex justify-center items-center text-xl relative flex-shrink-0 mt-2">
                <span className="font-bold">{userName.charAt(0).toUpperCase()}</span>
            </div>
            <div className="p-2 bg-slate-200 rounded-md dark:bg-slate-700 shadow-md flex-1">
                <header className="flex justify-between">
                    <h3 className="flex flex-col text-sm">
                        <span className="sm:text-2xl text-xl font-bold leading-none mb-1">{titleCase(userName)}</span>
                        <span className="opacity-60">{TimeAgo(date)} {isEditedPost ? "(edited)" : ""}</span>
                    </h3>
                    {activeUserID === userID && <div className="flex gap-4 text-xl">
                        <span className="flex items-start gap-1 opacity-75 cursor-pointer hover:opacity-100 select-none"
                        onClick={()=>setIsEdit(pre => !pre)}
                        >
                            <AiFillEdit/>
                            <span className="text-lg leading-5 hidden md:block">Edit</span>
                        </span>
                        <span className="flex items-start gap-1 opacity-75 cursor-pointer hover:opacity-100 select-none"
                        onClick={()=>setDeletePost(postID)}
                        >
                        <AiFillDelete/>
                        <span className="text-lg leading-5 hidden md:block">Delete</span>
                        </span>
                    </div>}
                </header>
                {
                !isEdit ? <p className="mt-1 md:text-xl text-lg">
                    {post}
                </p>
                :
                <div className="mt-1 md:text-xl text-lg">
                    <textarea rows="5" cols="50"
                    defaultValue={post}
                    className="w-full p-2 border-2 theme-border bg-transparent rounded-md"
                    ref={editTextRef}
                    ></textarea>
                    <div className="flex gap-3">
                        <span className="py-1 px-2 theme-mode rounded-md text-md"
                        onClick={()=>handleEditNote(editTextRef.current?.value, postID)}
                        >Save</span>
                        <span className="py-1 px-2 theme-mode rounded-md text-md"
                        onClick={()=>setIsEdit(false)}
                        >Cancel</span>
                    </div>
                </div>
                }

                <div className="flex justify-end items-center gap-3">
                    <span className="flex justify-center items-center gap-1">
                        <AiFillLike/>
                        <span>{likeCount}</span>
                    </span>
                    <span className="flex justify-center items-center gap-1">
                        <AiFillDislike/>
                        <span>{disLikeCount}</span>
                    </span>
                </div>
            </div>

            
        </section>

        <section className="ml-[50px] mt-2 flex gap-5">
                <span className="hover:opacity-100 cursor-pointer text-2xl opacity-70"
                onClick={()=>dispatch(likePost({postID, activeUserID}))}
                >
                    {postLikeByUser.includes(activeUserID) ? <AiFillLike/> : <AiOutlineLike/>}
                </span>
                <span className="hover:opacity-100 cursor-pointer text-2xl opacity-70"
                onClick={()=>dispatch(dislikePost({postID, activeUserID}))}
                >
                    {postDislikeByUser.includes(activeUserID) ? <AiFillDislike/> : <AiOutlineDislike/>}
                </span>
                {/* <span className="hover:underline cursor-pointer md:text-lg">Reply</span> */}
        </section>
        
    </article>
  )
}

export default SinglePost