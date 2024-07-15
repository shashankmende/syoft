
import { useState } from 'react'
import './index.css'
import { MdOutlineRemoveRedEye ,MdOutlineVisibilityOff} from "react-icons/md";

import { useNavigate } from 'react-router-dom';

const Login = ()=>{

    const [loginErr,setLoginErr] = useState("")
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [showPassword,setShowPassword] = useState(false)

    
    const navigate = useNavigate();
    const toggleVisibility = ()=>{
        setShowPassword(!showPassword)
    }

    const onSubmitLogin=async (e)=>{
        e.preventDefault();
        const requestBody ={
            user_email:username,
            user_password:password
        }

        const api = 'https://syoft.dev/Api/userlogin/api/userlogin'

        const options = {
            method:"POST",
            Headers:{
                "Content-Type":"application/json"
            }
            ,
            body: JSON.stringify(requestBody)
        }
        const response = await fetch(api,options)
        console.log("login response = ",response)
        setPassword("")
        setUsername("")
        if (response.ok === true){
            navigate("/dashboard")
        }
        else{
            setLoginErr(response)
        }


    }


    return (
        <div className='bg_container'>
            <form className="login_bg_container" onSubmit={onSubmitLogin}>
                <h1>Login</h1>

                <div className="username_label_container">
                    <label htmlFor='username'  className='username_label'>Username*</label>
                    <input type="text" id='username' value={username} required className='username_input' onChange={(e)=>setUsername(e.target.value)}/>

                </div>

                <div className="username_label_container">
                    <label htmlFor='password' className='username_label'>Password*</label>
                    <div>
                    <input type={showPassword?"text":"password"} id='password' required  value={password}  className='username_input' onChange={(e)=>setPassword(e.target.value)}/>
                    <span onClick={toggleVisibility} className='login_eye_icon'
                            
                            >
                        {showPassword ? <MdOutlineVisibilityOff/>:<MdOutlineRemoveRedEye/>}</span>
                        </div>
                </div>

                <button type='submit' className='login_button'>Login</button>
                {loginErr&& <p>{loginErr}</p>}
                

            </form>
        </div>
    )

}

export default Login