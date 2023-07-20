import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setLogged } from "../../app/features/user"

const SignIn = () => {
  const navigate = useNavigate()
  const userInputRef = useRef()
  const passInputRef = useRef()
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const [error, setError] = useState({
    isError: false,
    userError: "",
    passError: "",
  })

  
  const activeUser = users.find(user => user.isLogged)

  function onSubmit(e) {
    e.preventDefault();
    if (!userInputRef.current?.value || !passInputRef.current?.value) {
      if (!userInputRef.current?.value) {
        setError(pre => ({ ...pre, isError: true, userError: "User Name is required" }))
        userInputRef.current.value = "";
      }

      if (!passInputRef.current?.value) {
        setError(pre => ({ ...pre, isError: true, passError: "Password is required" }))
        passInputRef.current.value = "";
      }

    }else{
      const activeUser = users.find(user => user.name === userInputRef.current?.value && user.password === passInputRef.current?.value)
      if(!activeUser){
        setError(pre => ({ ...pre, isError: true, passError: "Wrong credentials !!!", userError: "Wrong credentials !!!" }));
        userInputRef.current.value = "";
        passInputRef.current.value = "";
      }else{

        setError({
          isError: false,
          userError: "",
          passError: "",
        })
        dispatch(setLogged(activeUser.userID))
        navigate(`/user/${activeUser.userID}`)
      }
    }
  }

  useEffect(()=>{
    if(activeUser){
      navigate(`/user/${activeUser.userID}`)
    }
  },[])

  if(activeUser){
      return null
  }

  return (

    <div className="h-[calc(100vh-99.78px)] md:h-[calc(100vh-119.78px)] flex flex-col justify-center max-w-[500px] mx-auto">
      <h1 className="md:text-4xl text-3xl  mb-3 text-center">Sign In</h1>
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <input
          ref={userInputRef}
          type="text"
          placeholder={`${error.isError && error.userError ? error.userError : "User Name"}`}
          className={`w-full p-2 border-2 theme-mode rounded-md ${error.isError && error.userError ? 'errorInput' : "theme-border"}`}
        />
        <input
          ref={passInputRef}
          type="password"
          placeholder={`${error.isError && error.passError ? error.passError : "Password"}`}
          className={`w-full p-2 border-2 theme-mode rounded-md ${error.isError && error.passError ? 'errorInput' : "theme-border"}`}
        />

        <button type="submit" className="px-2 py-1 invert-theme theme-border border-2 text-lg rounded-md uppercase">Sign In</button>
      </form>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Link to="/signup" className="text-center underline mt-2 md:text-lg">Don't have an account</Link>
    </div>
  )
}

export default SignIn