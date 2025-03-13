import React, { useState } from 'react';
import "./HomePage.css";
import NameModal from './Modals/NameModal';

const HomePage = () => {
  const [showUsername,setShowUsername]=useState(true);
  const [showLoading,setShowLoading]=useState(false);
  const closeUsernameModal=()=>{
    setShowLoading(true);
    
    setTimeout(()=>{
      setShowUsername(false);
    },3000)
  }

  return (
    <div className='home-component'>
      <NameModal showModal={showUsername} closeModal={closeUsernameModal} showLoading={showLoading}/>
    </div>
  );
}

export default HomePage;
