import {AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike} from "react-icons/ai"

const SinglePost = () => {
  return (
    <article>
        <section className="flex gap-4">
            <div className="select-none rounded-full w-[35px] h-[35px] invert-theme flex justify-center items-center text-xl relative flex-shrink-0 mt-2">
                <span>H</span>
            </div>
            <div className="p-2 bg-slate-200 rounded-md dark:bg-slate-700 shadow-md">
                <h3 className="flex flex-col text-sm">
                    <span className="text-lg font-bold">Header Pollixe</span>
                    <span className="opacity-60">1hr</span>
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id sunt, aspernatur error temporibus quo esse fugit? Sit nulla officia asperiores fuga delectus fugit commodi odit, porro itaque ut nesciunt.
                </p>

                <div className="flex justify-end items-center gap-3">
                    <span className="flex justify-center items-center gap-1">
                        <AiFillLike/>
                        <span>0</span>
                    </span>
                    <span className="flex justify-center items-center gap-1">
                        <AiFillDislike/>
                        <span>0</span>
                    </span>
                </div>
            </div>

            
        </section>

        <section className="ml-[50px] mt-1 flex gap-3">
                <span className="hover:opacity-100 cursor-pointer md:text-2xl text-xl opacity-70"><AiOutlineLike/></span>
                <span className="hover:opacity-100 cursor-pointer md:text-2xl text-xl opacity-70"><AiOutlineDislike/></span>
                {/* <span className="hover:underline cursor-pointer md:text-lg">Reply</span> */}
        </section>
        
    </article>
  )
}

export default SinglePost