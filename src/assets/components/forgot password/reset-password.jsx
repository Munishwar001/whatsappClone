// ResetPassword.jsx
import React, { useState } from "react";
import styles from "./reset-password.module.css";
  import { toast } from 'react-toastify';
  import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } 

    const res = await fetch("http://localhost:8000/reset-password",{ 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp, newPassword }),
        credentials: "include"
    })
    if (res.ok) {
    setError("");
    toast.success("Password reset successfully!");  
    navigate("/login");
    return ;
    } 
    setError("Invalid Information");
  };

  return (  
     <div className={styles.box}>
    <div className={styles.container}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Enter OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>Reset Password</button>
      </form>
    </div>
    </div>
  );
};

export default ResetPassword;
