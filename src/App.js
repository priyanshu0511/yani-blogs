import { Route, Routes, useLocation, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/config";
import Footer from "./components/Footer";


function App() {
  const location = useLocation();

  const hideNavbarRoutes = ['/signup', '/login']; 
  const hideFooterRoutes = ['/signup', '/login','/create']; 

  const [isAuth,setIsAuth]=useState(false);

  const auth=getAuth(app);

  useEffect(() => {
    // Check if user is logged in when the app loads
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsAuth(true);
            localStorage.setItem("getAuth", true); // Store auth state
        } else {
            setIsAuth(false);
            localStorage.removeItem("getAuth"); // Clear auth state
        }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
}, [auth]);

  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login"
    })
  }

  return (
    <div>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar isAuth={isAuth} signUserOut={signUserOut}/>}

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn setIsAuth={setIsAuth}/>} />
        </Routes>
      </div>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
