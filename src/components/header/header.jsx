import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { setLoggedOut } from "../../app/features/user";

const Header = () => {
  const theme = JSON.parse(localStorage.getItem('theme'))
  const [dark, setDark] = useState(theme)
  const [scroll, setScroll] = useState(false)
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  const loaction = useLocation()
  const users = useSelector(state => state.users)
  const activeUser = users.find(user => user.isLogged)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(dark){
        document.body.classList.add("dark")
        localStorage.setItem('theme',JSON.stringify(dark))
    }else{
        document.body.classList.remove("dark")
        localStorage.setItem('theme',JSON.stringify(dark))
    }
  }, [dark])

  function blurProfile(e){
      if(!e.target.closest(".profile")){
        
        setToggle(false)
      }
  }

  
  useEffect(()=>{
    if(!toggle) return
    window.addEventListener("mousedown", blurProfile)
    return () => window.removeEventListener("mousedown", blurProfile)
  
  },[toggle])

  function handleScroll(){
      if(window.scrollY > 20){
        setScroll(true)
      }else{
        setScroll(false)
      }
  }

  useEffect(()=>{
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  
  },[scroll])

  function handleLoggedOut(e, id){
   
    e.stopPropagation()
    dispatch(setLoggedOut(id))
    setToggle(false)
  }

  return (
    <header className={`px-4 py-2 flex justify-between items-center gap-3 md:gap-5 sticky top-0 z-50 ${scroll ? 'theme-mode' : ''}`}>
        <div className="logo font-bold cursor-pointer"
        onClick={()=>navigate('/')}
        >
            <h2 className="text-1xl font-serif md:text-4xl">
                <span className="inline-block align-top">Post</span>
                <span className="text-2xl inline-block align-middle md:text-6xl">2</span>
                <span className="inline-block align-[-10px] md:align-[-20px]">Post</span>
                </h2>
        </div>
        {!activeUser && <ul className="ml-auto flex gap-2 md:gap-3 text-md">
          <li>
              <Link to="/signup" className={`${loaction.pathname.includes('/signin') || loaction.pathname === '/' ? 'opacity-60' : ""} md:text-xl font-bold`}>Sign Up</Link>
          </li>
          <li>
              <Link to="/signin" className={`${loaction.pathname.includes('/signup') ? 'opacity-60' : ""} md:text-xl font-bold`}>Sign In</Link>
          </li>
          
        </ul>}
        <div className = {`toggle-switch ${activeUser ? "ml-auto" : ""}`}>
            <label>
                <input type = "checkbox" checked={dark} onChange={()=>setDark(pre => !pre)}/>
                <span className = "slider"></span>
            </label>
            
        </div>
        {activeUser && <div className="select-none rounded-full w-[25px] h-[25px] invert-theme flex justify-center items-center text-sm font-bold md:w-[35px] md:h-[35px] md:text-xl cursor-pointer relative"
        onClick={()=>setToggle(true)}
        >
          <span>{activeUser?.name.charAt(0).toUpperCase()}</span>
          {toggle && <div className="absolute invert-theme top-[30px] md:top-[40px] right-0 min-w-[100px] md:min-w-[200px] rounded-[3px] p-1 profile cursor-default"
          onBlur={()=>setToggle(false)}
          tabIndex={1}
          >
              <p className="text-center pb-[0.15em] mb-[0.15em] border-b-[1px] border-white dark:border-slate-900">{activeUser?.name}</p>
              <Link to="/signin" className="opacity-70 font-normal" onClick={(e)=>{handleLoggedOut(e, activeUser?.userID)}}>Logout</Link>
          </div>}
        </div>}
    </header>
  )
}

export default Header