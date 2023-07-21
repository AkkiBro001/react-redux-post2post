/* eslint-disable react/prop-types */
import { useState } from "react"
import SinglePost from "./singlePost"

const Posts = ({posts, users, activeUserID, setDeletePost}) => {

    const [sort, setSort] = useState("newest")
    let orderedPost;
    switch(sort){
        case "newest": orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date)); break;
        case "oldest": orderedPost = posts.slice().sort((a,b) => a.date.localeCompare(b.date)); break;
        case "liked": orderedPost = posts.slice().sort((a,b) => b.likeCount - a.likeCount); break;
        case "disliked": orderedPost = posts.slice().sort((a,b) => b.disLikeCount - a.disLikeCount); break;
        default: orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
    }
    
  return (
    <div className="mt-6 mb-[50px]">
        <header className="flex justify-between items-center pb-3 mb-4 border-b-2 theme-border">
            <div className="text-lg opacity-70 font-bold md:text-xl lg:text-2xl">
                <span className="mr-1">Total Posts:</span>
                <span className="italic">{posts.length}</span>
            </div>
            <select name="" id="" className="p-1 border-2 theme-border theme-mode rounded-md text-md md:text-xl"
            value={sort}
            onChange={(e)=>setSort(e.target.value)}
            >
                <option value="newest" className="py-3">Newest</option>
                <option value="oldest" className="py-3">Oldest</option>
                <option value="liked" className="py-3">Most liked</option>
                <option value="disliked" className="py-3">Most disliked</option>
            </select>
        </header>

        <section className="flex flex-col gap-5">

            {
                orderedPost.map(post => {
                const userName = users?.find(user => user.userID === post.userID).name;
                
                return <SinglePost key={post.postID} {...post} userName={userName} activeUserID={activeUserID} setDeletePost={setDeletePost}/>
                })
            }
            
            
            
        </section>
    </div>
  )
}

export default Posts