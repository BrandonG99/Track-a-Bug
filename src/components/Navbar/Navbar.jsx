import './Navbar.scss';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../Context/darkModeContext'; 
import { useContext } from 'react';

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
         <div className="searchbar">
           <input type="text" placeholder="Search..." />
           <SearchIcon />
         </div>
         <div className="items">
           <div className="item">
            <LanguageIcon className="icon language-icon" />
            English
           </div> 
           <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type:"TOGGLE" })} />
           </div> 
           <div className="item">
            <NotificationNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
           </div> 
           <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
           </div>     
           <div className="item">  
              <img                   
                className="avatar" 
                src="https://www.brandonguard.com/images/Avatar-Image.jpeg" 
                 alt="avatar" 
              />
           </div>  
         </div>
      </div>
    </div>
  );
};

export default Navbar;