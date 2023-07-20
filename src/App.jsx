import SignUp from "./components/formInput/signUp";
import Header from "./components/header/header";
import BackDrop from "./assets/bg.png"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/formInput/signIn";
import User from "./components/user/user";
import { Provider } from "react-redux";
import Store from "./app/store";
import NotFound from "./components/notFound/NotFound";


function App() {
  return (
    <Provider store={Store}>
      <div className="theme-mode min-h-screen relative z-10">
        <img src={BackDrop} alt="" className="absolute top-0 left-0 -z-10 opacity-5 h-full object-cover" />
        <BrowserRouter>
        
          <Header />
          <main className="max-w-[1000px] m-auto p-4">
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/user/notfound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

          </main>
        </BrowserRouter>
        <footer className="px-4 py-2 theme-mode absolute w-full bottom-0 text-sm md:text-lg text-center">
          &copy;Post2Post 2023 All rights reserved.
        </footer>
      </div>
    </Provider>
  )
}

export default App
