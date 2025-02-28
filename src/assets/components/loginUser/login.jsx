import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = ({ setIsLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
 
        if (!email || !password) {
            setError("Both fields are required");
            return;
        }

        if (!validateEmail(email)) {
            setError("Invalid email format");
            return;
        } 
        fetch("http://localhost:8000/user/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email :email,password:password}),
            credentials:'include'
        })
        .then((data)=> data.json())
        .then((data)=> {console.log(data)
            // console.log("Login Successful!", { email, password }); 
            setIsLogin(true);
            navigate("/app");
            alert("Login Successful!");  
        })
        .catch((error)=>{
            alert("Please register correctly");
            console.log(error);
            
        })
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Login</h2>
                {error && <p className={styles.error}>{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className={styles.button}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
