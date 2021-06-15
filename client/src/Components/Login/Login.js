import React, {useRef, useState } from 'react';
import './Login.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { action } from '../../redux/action';
import history from '../../config/history';

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => ({
    setUserDetails: (user) => dispatch(action.setUserDetails(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
    let [emailRequired, setEmailRequired] = useState(true);
    let [passwordRequired, setPasswordRequired] = useState(true);
    let [viewUserNotExist,setViewUserNotExist]=useState(false)
    const { setUserDetails } = props;
    const userNameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();

     const login = async () => {

            try {
                let objUser = {
                    password: passwordRef.current.value,
                    email: emailRef.current.value
                }
                const obj = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(objUser)
                };
                const response = await fetch('http://localhost:3400/checkPermission', obj);
                const data = await response.json();
                console.log(data);
                if (data == false) {
                    setViewUserNotExist(true);
                } else {
                    await setUserDetails(data);
                    history.push("/main")
                }
            } catch (error) {
                console.log(error);
            }
    }

   
    return (
        <div id="container">
            <div id="formLogin">

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl ref={emailRef}
                        // type="email"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        max-length="20"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl ref={passwordRef}
                        type="password"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        max-length="20"
                    />
                </InputGroup>
                <Button onClick={login}>Login</Button>
                <br></br>
                {viewUserNotExist?<span>user not exist!</span>:<span></span>} 
            </div>
        </div>
    )
})