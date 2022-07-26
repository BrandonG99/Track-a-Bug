import React from 'react';  
import Home from './Pages/Home/Home';        
import Tickets from './Pages/Tickets/Tickets';
import Projects from './Pages/Projects/Projects';
import Stats from './Pages/Stats/Stats';
import Users from './Pages/Users/Users'; 
import Single from './Pages/Single/Single';   
import Login1 from './Pages/Login/Login'; 
import './Style/dark.scss';     
import { BrowserRouter, Routes, Route       
} from "react-router-dom";    
import { userInputs } from './formSource';
import { useContext } from 'react';
import { DarkModeContext } from './Context/darkModeContext';
import { AuthContext } from './Context/AuthContext';

import Signup from './components/Signup';
import { Container } from 'react-bootstrap'; 
import { AuthProvider } from './Context/AuthContext';
import Login from './Pages/Login/Login'
import PrivateRoute from './components/PrivateRoute'; 
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';     

function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (    
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="" >
            <Route path="/dashboard" element={<Home />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="current-projects" element={<Projects />} />
            <Route path="stats" element={<Stats />} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="Projects"> 
              <Route index element={<Users/>} />
              <Route path=":projectId" element={<Single />} />
            </Route> 
          </Route> 
        </Routes> 
        
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Routes>
                  <Route path="/update-profile" 
                  element={
                    <PrivateRoute>
                      <UpdateProfile />
                    </PrivateRoute>
                  } />
                  <Route path="/" element={<Signup />} style={{ minHeight: "100vh" }} />
                  <Route path="/login" element={<Login />} />
                  <Route className=".bg-primary" path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
            </div>
          </Container>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

