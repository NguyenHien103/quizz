import React from 'react';
import { useNavigate } from 'react-router-dom';
import { checkExits, register } from "../../Services/UserService";
import { generateToken } from "../../Helper/generateToken";
import './register.scss'; // Import the SCSS file

function Register() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        
        const checkExitsEmail = await checkExits("email", email);
        if (checkExitsEmail.length > 0) {
            alert("Email đã tồn tại");
        } else {
            const options = {
                fullname: fullName,
                email: email,
                password: password,
                token: generateToken(),
            };
            const response = await register(options);
            if (response) {
                navigate("/login");
            } else {
                alert("Đăng ký thất bại");
            }
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="fullName">Họ tên:</label>
                    <input type="text" id="fullName" placeholder="Nhập họ tên" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Nhập email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Nhập mật khẩu" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
