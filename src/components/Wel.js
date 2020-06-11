import React from 'react';
import Logwel from './Logwel.module.css';


    const Wel=({user, onSignOut})=>{
        return(
    <div className={Logwel.welstyle}>
            <h1>Hi! <strong>{user.username}</strong>  .Welcome to Beyond 8. </h1>
            <a href="/#" onClick={onSignOut}>Sign Out</a>
        </div>
        )
    }
   
  export default Wel;
