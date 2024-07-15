import { useState } from 'react';
import './index.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image.png';
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Registration = () => {
    const [loginTab, setLoginTab] = useState(true);
    // const [loginErr, setLoginErr] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setCheckbox] = useState(false);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState('');

    const navigate = useNavigate();

    const toggleVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleCheckbox = () => {
        setCheckbox(!isChecked);
    };

    const onSubmitHandle = async (e) => {
        e.preventDefault();
        const requestBody = {
            user_firstname: fullName,
            user_email: email,
            user_phone: "9909873423",
            user_password: password,
            user_lastname: "abc",
            user_city: "Hyderabad",
            user_zipcode: "500072"
        };

        const api = 'https://syoft.dev/Api/user_registeration/api/user_registeration';
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        };

        const response = await fetch(api, options);

        console.log("request body", response);
        setFullName("");
        setCompany("");
        setEmail("");
        setPassword("");

        if (response.ok === true) {
            localStorage.setItem("userDetails",JSON.stringify(requestBody))
            navigate('/login');
        } else {
            // setLoginErr(response);
        }
    };

    const toggleTabs = () => {
        setLoginTab(!loginTab);
    };

    return (
        <div className='registration_bg_container'>
            <div className='welcome_text_container'>
                <div className='welcome_text_inner_container'>
                    <h1 className='welcome_heading'>Welcome to <br /> our community</h1>
                    <p className='welcome_para'>Fuse helps developers to build organized and well coded <br /> dashboards full
                        of beautiful and rich modules. Join us and start<br /> building your application today.
                    </p>
                    <div className="images-text-container">
                        <div>
                            <img src={image1} alt="im1" className="profile_img" />
                            <img src={image2} alt="im1" className="profile_img2" />
                            <img src={image2} alt="im1" className="profile_img2" />
                            <img src={image2} alt="im1" className="profile_img2" />
                        </div>
                        <p className='welcome_para'>More than 17k people joined us, it's your turn</p>
                    </div>
                </div>
            </div>
            <div className='sign_up_container'>
                <form className='form-container' onSubmit={onSubmitHandle}>
                    <h1>Sign up </h1>
                    <p>Already have an account? <span className='sign_span'>Sign in</span></p>
                    <div style={{ marginTop: "30px" }}>
                        <label htmlFor='firstName' className="full_name_label">Full name*</label>
                        <br />
                        <input id='firstName' type='text' className='first_name_input' required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <label htmlFor='email' className="full_name_label">Email address*</label>
                        <br />
                        <input id='email' type='text' className='first_name_input' required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <label htmlFor='password' className="full_name_label">Password*</label>
                        <br />
                        <input id='password' type={showPassword ? "text" : "password"} className='first_name_input' required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <span onClick={toggleVisibility} className='eye_icon'>
                            {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineRemoveRedEye />}
                        </span>
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <label htmlFor='company' className="full_name_label">Company</label>
                        <br />
                        <input id='company' type='text' className='first_name_input'
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div className='checkbox_declaration_container'>
                        <input type='checkbox' onClick={toggleCheckbox} />
                        <p>I agree to the <span className='sign_span'>Terms of Service </span> and <span className='sign_span'>Privacy Policy</span></p>
                    </div>
                    <button disabled={!isChecked} className='create_account-button' onClick={toggleTabs}>Create your free account</button>
                </form>
            </div>
        </div>
    )
};

export default Registration;
