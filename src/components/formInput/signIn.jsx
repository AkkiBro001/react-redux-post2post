import { Link } from "react-router-dom"

const SignIn = () => {

  

  return (
    
    <div className="h-[calc(100vh-99.78px)] md:h-[calc(100vh-119.78px)] flex flex-col justify-center max-w-[500px] mx-auto">
        <h1 className="md:text-4xl text-3xl  mb-3 text-center">Sign In</h1>
        <form className="flex flex-col gap-3">
            <input type="text" placeholder="User Name" className="w-full p-2 border-2 theme-border theme-mode rounded-md"/>
            <input type="password" placeholder="Password" className="w-full p-2 border-2 theme-border theme-mode rounded-md"/>
            <button type="submit" className="px-2 py-1 invert-theme theme-border border-2 text-lg rounded-md uppercase">Sign In</button>
        </form>
       {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Link to="/signup" className="text-center underline mt-2 md:text-lg">Don't have an account</Link>
    </div>
  )
}

export default SignIn