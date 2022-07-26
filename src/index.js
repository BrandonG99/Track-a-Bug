import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkModeContextProvider } from './Context/darkModeContext';
import { AuthProvider } from './Context/AuthContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
  <React.StrictMode>
    <DarkModeContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')  
); 
reportWebVitals();