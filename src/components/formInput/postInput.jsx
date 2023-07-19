const PostInput = () => {
  return (
    <form className="flex flex-col gap-3">
        <input type="text" placeholder="Post Title" className="w-full p-2 border-2 theme-border theme-mode rounded-md"/>
        <textarea placeholder="Post Message" className="w-full p-2 border-2 theme-border theme-mode rounded-md" rows="5" cols="50"/>
        <button type="submit" className="px-2 py-1 invert-theme theme-border border-2 text-lg rounded-md uppercase self-center w-full sm:w-[300px]">Post</button>
    </form>
  )
}

export default PostInput;