import { useState } from "react";
import styles from "./ForgotPassword.module.css"; // Import CSS Module
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const res = await fetch("http://localhost:8000/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
      credentials: 'include',
    });
    if(res.status=== 404){
      toast.error("Email not found ");
      setMessage("Email not found ");
    }
    else
   { const data = await res.json();
    toast.success("OTP has been sent to your Mail");
    toast.update(`your OTP is ${data.otp} validate only for 5 min`);
    setMessage(data.message); 
    navigate("/reset-password");
  }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Forgot Password</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Get OTP</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
