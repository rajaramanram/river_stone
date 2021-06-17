import React, {useState} from 'react';
import axios from 'axios';


import { createBrowserHistory } from "history";

export const history = createBrowserHistory();


function UserLogin({setToken}) {
    const [user,setUser]=useState('');
    const [password,setPassword]=useState('')
    const handleUsernameChange = (event) =>{
            setUser(
                event.target.value
            )
        }
    const handlePasswordChange = (event) =>{
            setPassword(
                event.target.value
            )
        }
    const handleSubmit = (event) =>{
            console.log("working submit")
            event.preventDefault();
            let request = {
                username:user,
                password:password            }
            console.log(user);
            console.log(password);
            console.log(request)
            axios.post("http://localhost:9001/user_login",request)
            .then(resp=>{
                console.log(resp.data)
                
                console.log("axios.running")
            }).catch(err =>{ 
                console.log(err)
            });
        
        }
    const handleRegisterfunction = ()=>{
        history.push("/user_register");
        window.location.reload();
        console.log("dispatch login check")
    }
    
        return (
            <div className='container'>
            <form >
                <div>
                    <label className="control-label col-md-4">USERNAME:</label>
                    <input className="control-label col-md-8" type='text' id='username' value={user} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label className="control-label col-md-4">PASSWORD:</label>
                    <input className="control-label col-md-8" type='password' id='password' value={password} onChange={handlePasswordChange}></input>
                </div>
                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>SUBMIT</button>
                <button type='submit' className='btn btn-danger' onClick={handleRegisterfunction}>REGISTER</button>
            </form>
            </div>
        )
};

/*UserLogin.propTypes = {
    setToken: PropTypes.func.isRequired
}*/

export default UserLogin