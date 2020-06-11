import React from 'react';

import './App.css';
import Log from './components/Log'
import Wel from './components/Wel'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user:null
    }
  }
 signIn(username,password){
   this.setState({
     user:{
       username,
       password,
     }
   })
 }
 signOut(){
   this.setState({user:null})

 }
 
 render(){
   return <div className="app">
     {
       (this.state.user) ?
       <Wel
       user = {this.state.user}
       onSignOut = {this.signOut.bind(this)}
       />
       :
       <Log
       SignIn={this.signIn.bind(this)}
       />
     }
   </div>
 }

};
export default App;
