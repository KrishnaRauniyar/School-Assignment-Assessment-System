import React, { Component } from 'react'
// import SMaterialBlock from './Studycomponents/SMaterialBlock'
// import UserLogin from './Authentication/UserLogin'
import UserSignUp from './Authentication/UserSignup'
import UserLogin from './Authentication/UserLogin'
import Userdata from './Authentication/Userdata'

export default class App extends Component {
  state = {
    registered: true,
  }
  showLoginForm = () =>{
    this.setState({
      registered: true,
    })
  }
  showSignupForm = () =>{
    this.setState({
      registered:false,
    })
  }
  // loggedIn =()=>{
  //   this.setState({
  //     registered: 'loggedin'
  //   })
  // }
  render() {
    
    if (!localStorage.getItem('token')) {
      return (
        <div>
          {/* <UserSignUp></UserSignUp> */}
          {
            (this.state.registered === true )?
            <UserLogin showsignup = {this.showSignupForm}></UserLogin>
            :<UserSignUp showlogin = {this.showLoginForm}></UserSignUp>

          }
                      
          {/* <UserLogin></UserLogin> */}
          {/* <SMaterialBlock></SMaterialBlock> */}
        </div>
      )
    }
    else{
      return(
        // <SMaterialBlock></SMaterialBlock>
        <Userdata></Userdata>
      )
    }
  }
}
