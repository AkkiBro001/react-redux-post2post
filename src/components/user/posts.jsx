import SinglePost from "./singlePost"

const Posts = () => {
  return (
    <div className="mt-3 mb-[50px]">
        <header className="flex justify-between items-center pb-3 mb-4 border-b-2 theme-border">
            <div className="text-lg opacity-70 font-bold md:text-xl lg:text-2xl">
                <span className="mr-1">Total Posts:</span>
                <span className="italic">5</span>
            </div>
            <select name="" id="" className="p-1 border-2 theme-border theme-mode rounded-md text-sm md:text-md">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="liked">Most liked</option>
                <option value="disliked">Most disliked</option>
            </select>
        </header>

        <section className="flex flex-col gap-5">
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
            
        </section>
    </div>
  )
}

export default Posts