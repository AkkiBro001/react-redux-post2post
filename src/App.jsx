import SignUP from "./components/formInput/signUP";
import Header from "./components/header/header";
import BackDrop from "./assets/bg.png" 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/formInput/signIn";
import User from "./components/user/user";


function App() {
  return(
    <div className="theme-mode min-h-screen relative z-10">
      <img src={BackDrop} alt="" className="absolute top-0 left-0 -z-10 opacity-5 h-full object-cover"/>
      <BrowserRouter>
      <Header/>
      <main className="max-w-[1000px] m-auto p-4">
      <Routes>
        <Route path="/signup" element={<SignUP/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/user/:id" element={<User/>}/>
      </Routes>
        
      </main>
      </BrowserRouter>
      <footer className="px-4 py-2 theme-mode absolute w-full bottom-0 text-sm md:text-lg text-center">
        &copy;Post2Post 2023 All rights reserved.
      </footer>
    </div>
  )
}

export default App
