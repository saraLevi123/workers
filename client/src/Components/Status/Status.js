import React, {useRef, useState } from 'react';
import './Status.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { action } from '../../redux/action';
import history from '../../config/history';

function mapStateToProps(state) {
    return {
        user:state.user,
        userStatus: state.userStatus
    }
}
const mapDispatchToProps = (dispatch) => ({
    setUserDetails: (user) => dispatch(action.setUserDetails(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
  const {user,userStatus}=props
   const saveChange=()=>{
       
   }
    return (
        <div>
         Status<br></br>
        <input value={userStatus.userName}></input><br></br> 
        <input value={userStatus.email}></input> <br></br>
        <input value={userStatus.password}></input> <br></br>
        <input value={userStatus.status}></input> <br></br>
       { user.email=='admin@workers.com'?<button onClick={saveChange()}>saveChange</button>:""} 
        </div>
    )
})