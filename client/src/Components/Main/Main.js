import React, {useEffect,useRef, useState } from 'react';
import './Main.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { action } from '../../redux/action';
import history from '../../config/history';

function mapStateToProps(state) {
    return {
        userRedux: state.user,
        userStatusRedux:state.userStatus
    }
}
const mapDispatchToProps = (dispatch) => ({
    setUserDetails: (user) => dispatch(action.setUserDetails(user)),
    setUserStatus: (user) => dispatch(action.setUserStatus(user))

})

export default connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
  const {userRedux}=props
  let [allUsers, setAllUsers] = useState([{}]);
  let [isMine, setIsMine] = useState(false);
  const { setUserStatus } = props;

  useEffect(async () => {
    try {
        const obj = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch('http://localhost:3400/getAllEmployed', obj);
        const data = await response.json();
        console.log("useEffect:"+typeof(data));
        await setAllUsers(data);
        console.log("useEffect2:"+allUsers[0].userName);
    } catch (error) {
        console.log(error);
    }
   }, []);
   const viewDeatail=async(user)=>{
       await setUserStatus(user)
        history.push("/main/status")
   }
    return (       
        <div>
            <h2>users</h2>
            <ul>
                    {allUsers.map((user, index) => (
                            <li key={index} onClick={() => viewDeatail(user)} style={{display:user._id==userRedux._id}}>
                            <span style={{color:'blue'}}>{"Name:"}</span>{" "+user.userName+" "}
                            <span style={{color:'blue'}}>{"status:"}</span>{" "+user.status+" "}
                            </li>

                    ))}

                </ul>
  
        </div>
    )
})