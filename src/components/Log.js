import React from 'react';
import Logwel from './Logwel.module.css';

class Log extends React.Component{
    handlesignin(e){
        e.preventDefault()
        let username=this.refs.username.value
        let password=this.refs.password.value
        this.props.SignIn(username, password)
    }
    
    render(){
        return(
            <div className={Logwel.form}>
             
                <img src="https://i7.pngguru.com/preview/348/800/890/computer-icons-avatar-user-login-avatar-thumbnail.jpg" alt="pic"/>
                <form onSubmit={this.handlesignin.bind(this)}>
                   <input type="text" ref="username" placeholder="Username" required/>
                   <input type="password" ref="password" placeholder="Password" required/>
                   <input type="submit" value="Login" />
                </form>        
                
            </div>



        )

        
    }
}
    


export default Log;
