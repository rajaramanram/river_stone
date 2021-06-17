import React, {useState} from 'react';
import axios from 'axios';









//<Dropdown options={options} onChange={(value) => setRole(value)} value={options[0]} placeholder="Select Role" />
function UserRegister() {
    const [username,setUserName]=useState('');
    const [firstname,setFirstName]=useState('');
    const [lastname,setLastName]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [email,setEmail]=useState('');
    const [role,setRole]=useState('User');
    const action = false
    
    const options = ['User', 'Admin'];
    

    const username_Change = (event) =>{
        setUserName(
                event.target.value
            )
        }
    const firstname_Change = (event) =>{
        setFirstName(
            event.target.value
            )
        }
    const lastname_Change = (event) =>{
        setLastName(
                event.target.value
        )
    }
    
    
    const password_Change = (event) =>{
            setPassword(
                event.target.value
            )
        }
    const email_Change = (event) =>{
            setEmail(
                event.target.value
            )
        }
    const confirmpassword_Change = (event) =>{
        setConfirmPassword(
            event.target.value
        )
    }
    const role_Change = (event) =>{
        
        setRole(
                event.target.value
        )
    }
    
    const handleSubmit = (event) =>{
            console.log("working submit")
            event.preventDefault();
            let request = {
                //product_id : (document.getElementById('product_id')as HTMLInputElement).value,
                username,firstname,lastname,email,password,role,action
                
            }
            console.log(username);
            console.log(password);
            console.log(email);
            axios.post("http://localhost:9001/userdb",request)
            .then(resp=>{
                
                console.log(resp.data)
                
            }).catch(err =>{ 
                console.log(err)
            });
            alert("User Registered")
            
        }
    return (
        <div className='container'>
            <div className="panel panel-info" >
                    <div className="panel-heading">
                        <div className="panel-title">Registration</div>
                      
                    </div>     
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div>
                    <label className="control-label col-md-4">USER NAME:</label>
                    <input className="control-label col-md-8" type='text' id='username' value={username} onChange={username_Change}></input>
                </div>
                <div>
                    <label className="control-label col-md-4"> FIRST NAME:</label>
                    <input className="control-label col-md-8" type='text' id='firstname' value={firstname} onChange={firstname_Change}></input>
                </div>
                <div>
                    <label className="control-label col-md-4">LAST NAME:</label>
                    <input className="control-label col-md-8" type='text' id='lastname' value={lastname} onChange={lastname_Change}></input>
                </div>
                
                <div>
                    <label className="control-label col-md-4">EMAIL:</label>
                    <input className="control-label col-md-8" type='email' id='email' value={email} onChange={email_Change}></input>
                </div>
                <div>
                    <label className="control-label col-md-4">PASSWORD:</label>
                    <input className="control-label col-md-8" type='password' id='password' value={password} onChange={password_Change}></input>
                </div>
                <div>
                    <label className="control-label col-md-4">CONFIRM PASSWORD:</label>
                    <input className="control-label col-md-8" type='password' id='confirmPassword' value={confirmPassword} onChange={confirmpassword_Change}></input>
                </div>
                <div>
                    <label className="control-label col-md-4">SELECET ROLE:</label>
                    <select className="control-label col-md-8" value={role} onChange={role_Change}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option></select>
                    </div>

                    <div>
                    <button className="control-label col-md-4" type='submit' className='btn btn-primary' onClick={handleSubmit}>SUBMIT</button>
                        </div>
                
                
            </form>
            </div> 
       </div>
        )
};



export default UserRegister