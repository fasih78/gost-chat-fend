
import LoginForm from './components/Loginform';
import SplashScreen from './components/Splashscreen';
import SignupForm from './components/Signupform';
import DashboardForm from './dataSource/dashboard';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
// import { Routes, Route, Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";







function Login() {
  const [isLoading, setIsLoading] = useState(true);
  // Simulate loading time using useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {isLoading &&  */}
      {/* <SplashScreen /> */}
      {/* } */}

      {isLoading ? <SplashScreen /> : <LoginForm />}

      {/* {isLoading ? <SplashScreen /> : <LoginForm /> || <SignupForm />} */}
      {/* <LoginForm /> */}
    </>
  );
}




function App() {
  return (
    // <>
    //   <Login />
    // </>

    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<DashboardForm />} />
        {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>


  );
}

export default App;
