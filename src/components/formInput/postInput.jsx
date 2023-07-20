import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../app/features/posts";

const PostInput = ({userID}) => {
  
  const [post, setPost] = useState("");
  const dispatch = useDispatch()

  function handlePost(e){
      e.preventDefault();
      dispatch(addPost(post, userID))
      setPost("");
    }

  function onChange(e){
    const value = e.target.value;
    
    if(value && value.match(/[^\s+]/g)){
      setPost(value)
    }else{
      setPost("")
    }
  }
  
  

  return (
    <form className="flex flex-col gap-3"
      onSubmit={handlePost}
    >
        
        <textarea placeholder="Post Message" className="w-full p-2 border-2 theme-border theme-mode rounded-md" rows="5" cols="50"
        value={post}
        onChange={onChange}
        />
        <button type="submit" className={`px-2 py-1 text-lg rounded-md uppercase self-center w-full sm:w-[300px] 
        ${post ? 'invert-theme' : 'bg-[#a7a7a7] text-[#737373]'}`}
        disabled={!post}
        >
          Post
          </button>
    </form>
  )
}

export default PostInput;