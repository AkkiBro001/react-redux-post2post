import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../app/features/user";
import { useNavigate } from "react-router-dom";


const SignUp = () => {

  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInputRef = useRef()
  const passInputRef = useRef()
  const cnfPassInputRef = useRef()
  const [error, setError] = useState({
    isError: false,
    userError: "",
    passError: "",
    cnfPassError: "",
  })
  const [isSignUp, setIsSignUp] = useState(false)

  const userNames = users.map(user => user.name.toLowerCase())
  const activeUser = users.find(user => user.isLogged);

  function onSubmit(e){
    e.preventDefault();
    if(!userInputRef.current?.value || !passInputRef.current?.value || !cnfPassInputRef.current?.value){
        if(!userInputRef.current?.value){
          setError(pre => ({...pre, isError: true, userError: "User Name is required"}))
          userInputRef.current.value = "";
        }

        if(!passInputRef.current?.value){
          setError(pre => ({...pre, isError: true, passError: "Password is required"}))
          passInputRef.current.value = "";
        }

        if(!cnfPassInputRef.current?.value){
          setError(pre => ({...pre, isError: true, cnfPassError: "Confirm Password is required"}))
          cnfPassInputRef.current.value = "";
        }
    }else{

        if(userInputRef.current?.value.includes(" ") || userInputRef.current?.value.length < 4){
          if(userInputRef.current?.value.includes(" ") ){
            setError(pre => ({...pre, isError: true, userError: "User name should not contain space"}))
            userInputRef.current.value = "";
          }else{
            setError(pre => ({...pre, isError: true, userError: "User name must be min 4 characters"}))
            userInputRef.current.value = "";
          }
        }
        
        else if(passInputRef.current?.value.length < 6 || cnfPassInputRef.current?.value.length < 6){
          setError(pre => ({...pre, isError: true, passError: "Password must be min 6 character", cnfPassError: "Password must be min 6 character"}))
          passInputRef.current.value = "";
          cnfPassInputRef.current.value = "";
        }

        else if(passInputRef.current?.value !== cnfPassInputRef.current?.value){
          setError(pre => ({...pre, isError: true, passError: "Password mismatch", cnfPassError: "Confirm password mismatch"}))
          passInputRef.current.value = "";
          cnfPassInputRef.current.value = "";
        }

        else if(userNames.includes(userInputRef.current?.value.toLowerCase())){
          setError(pre => ({...pre, isError: true, userError: "User name is already exists"}))
          userInputRef.current.value = "";
        }

        else{
          dispatch(addUser({name: userInputRef.current.value, password: passInputRef.current.value}))
          userInputRef.current.value = "";
          passInputRef.current.value = "";
          cnfPassInputRef.current.value = "";
          setIsSignUp(true)
          setError({
            isError: false,
            userError: "",
            passError: "",
            cnfPassError: "",
          })
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
    
    <div className="h-[calc(100vh-99.78px)] md:h-[calc(100vh-119.78px)] flex flex-col justify-center max-w-[500px] mx-auto"
    onSubmit={onSubmit}
    >
        <h1 className="md:text-4xl text-3xl mb-3 text-center">Sign Up</h1>
        {isSignUp && <p className="flex flex-col items-center mb-3 bg-green-600 p-1 rounded-md text-center">
          <span className="text-lg leading-none">Congratulation!! Your accout has been created successfully.</span>
          <span className="underline cursor-pointer mt-1"
          onClick={()=>{
            setIsSignUp(false)
            navigate('/signin')
          }}
          >Go to sign in page</span>
        </p>}
        <form className="flex flex-col gap-3">
            <input type="text" 
            placeholder={`${error.isError && error.userError ? error.userError : "User Name"}`} 
            className= {`w-full p-2 border-2 theme-mode rounded-md ${error.isError && error.userError ? 'errorInput' : "theme-border"}`}
            ref={userInputRef}
            />
            <input type="password" 
            placeholder={`${error.isError && error.passError ? error.passError : "Password"}`} 
            className={`w-full p-2 border-2 theme-mode rounded-md ${error.isError && error.passError ? 'errorInput' : "theme-border"}`}
            ref={passInputRef}
            />
            <input type="text" 
            placeholder={`${error.isError && error.cnfPassError ? error.cnfPassError : "Confirm Password"}`} 
            className={`w-full p-2 border-2 theme-mode rounded-md ${error.isError && error.cnfPassError ? 'errorInput' : "theme-border"}`}
            ref={cnfPassInputRef}
            />
            <button type="submit" className="px-2 py-1 invert-theme theme-border border-2 text-lg rounded-md uppercase">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp