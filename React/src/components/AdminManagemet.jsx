import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';

function AdminManagement() {
    
    const [email,setEmail]=useState('');
    const [action,setAction]=useState(false)
    //const [mode,setMode]=useState('')
    
    var columns=[
        {title: "First name", field: "firstname"},
        {title: "Last name", field: "lastname"},
        {title: "email", field: "email"}]
    //{title: "Mode", field: mode}
    
    const [data, setData] = useState([]); //table data
    useEffect(() => { 
        axios.get("http://localhost:9001/user_data")
            .then(res => {               
                setData(res.data)
                /*console.log("change_mode_if==="+res.data)
                if (res.data.action){
                    console.log("change_mode_if==="+res.data.action)
                    setMode('Activated')
                }
                else{
                    setMode('Deactivated')
                }*/
            })
            .catch(error=>{
                console.log("Error")
            })
        }, [])

    
    
    const email_Change = (event) =>{
        setEmail(
            event.target.value
        )
    }
    const handleAction = (event) =>{
        const action_value = event.target.value;
        setAction(bool => action_value)
        console.log("event,,,,,,"+event.target.value)
        //setAction(event.target.value)
        //setAction(() => event.target.value)
        /*
        if (action_value === true){
            console.log("if========================== running")
            setAction(action_value)
        }
        else{
            console.log("else========================== running")
            setAction(action_value)
        }*/
        console.log("action,,,setAction===="+action)
        let request = {email,action}
        axios.post("http://localhost:9001/change_action",request)
        .then(resp=>{
            alert("Üser Mode Changed");
            console.log(resp.data)
        }).catch(err =>{ 
            console.log(err)
        });
        
        
        
    }


    return (
            <div>
                <h1>DashBoard</h1>
                <MaterialTable
                    title="User data from remote source"
                    columns={columns}
                    data={data}
                    options={{ 
                        pageSize: 3,
                        pageSizeOptions: [3, 6, 12],
                    }}
                />
            <label>ENTER E-MAIL TO ACTIVATE OR DEACTIVATE:</label>
            <input type='text' id='email' value={email} onChange={email_Change}></input>
            <button type='submit' className='btn btn-primary' value={true} onClick={handleAction}>ACTIVATE</button>
            <button type='submit' className='btn btn-danger' value={false} onClick={handleAction}>DEACTIVATE</button>
            </div>
    )
}

export default AdminManagement
