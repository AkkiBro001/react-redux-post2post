import {MdFindInPage} from "react-icons/md"
import { useNavigate } from "react-router-dom"

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col mt-[200px] items-center">
        <MdFindInPage className="text-[5rem] md:text-[7rem]"/>
        <h1 className="text-3xl md:text-5xl mb-2">Page Not Found!!!</h1>
        <p className="text-lg md:text-xl mb-3">The requested URL was not found</p>
        <span className="underline md:text-lg cursor-pointer"
        onClick={()=>{navigate('/signin')}}
        >Go to home page</span>
    </div>
  )
}

export default NotFound