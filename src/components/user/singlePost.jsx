import {AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike} from "react-icons/ai"
import { TimeAgo, titleCase } from "../../utils/utils"
import { likePost, dislikePost } from "../../app/features/posts"
import { useDispatch } from "react-redux"

const SinglePost = ({postID, userID, date, disLikeCount, likeCount, post, postDislikeByUser, postLikeByUser, userName, activeUserID}) => {
    
  const dispatch = useDispatch()

  return (
    <article>
        <section className="flex gap-4">
            <div className="select-none rounded-full w-[35px] h-[35px] invert-theme flex justify-center items-center text-xl relative flex-shrink-0 mt-2">
                <span>{userName.charAt(0).toUpperCase()}</span>
            </div>
            <div className="p-2 bg-slate-200 rounded-md dark:bg-slate-700 shadow-md flex-1">
                <h3 className="flex flex-col text-sm">
                    <span className="text-lg font-bold">{titleCase(userName)}</span>
                    <span className="opacity-60">{TimeAgo(date)}</span>
                </h3>
                <p>
                    {post}
                </p>

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

        <section className="ml-[50px] mt-1 flex gap-3">
                <span className="hover:opacity-100 cursor-pointer md:text-2xl text-xl opacity-70"
                onClick={()=>dispatch(likePost({postID, activeUserID}))}
                >
                    {postLikeByUser.includes(activeUserID) ? <AiFillLike/> : <AiOutlineLike/>}
                </span>
                <span className="hover:opacity-100 cursor-pointer md:text-2xl text-xl opacity-70"
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