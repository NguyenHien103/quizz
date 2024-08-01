import React from 'react';
import { useDispatch } from "react-redux";
import { setCookie } from "../../Helper/cookie";
import { login } from "../../Services/UserService";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../actions/Login";
import './login.scss'; // Import the SCSS file

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const response = await login(email, password);

        if (response.length > 0) {
            console.log(response);
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullname, 1);
            setCookie("email", response[0].email, 1);
            setCookie("token", response[0].token, 1);
            dispatch(checkLogin(true))
            navigate("/");
        } else {
            alert("Sai tài khoản hoặc mật khẩu");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Log in to Quizz</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Log in</button>
                <p>Don't have an account? <a href="/register">Sign up</a></p>
            </form>
        </div>
    );
}

export default Login;
