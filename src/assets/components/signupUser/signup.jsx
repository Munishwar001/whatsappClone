import React, { useState } from "react";
import styles from "./signup.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    const result = fetch("http://localhost:8000/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, password: password }),
      // credentials: 'include'
    })
      .then((data) => data.json())
      .then((data) => {
        navigate("/login");
        console.log(data);
        console.log("Signup Successful!", { name, email, password });
        alert("Signup Successful!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <div className={styles.signup}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Signup</h2>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="text"
            placeholder="Full Name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Signup
          </button>
        </form>

        <p className={styles.navigate}>
          {" "}
          Already have an Account
          <Link to={"/login"}>
            <button>Login</button>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
