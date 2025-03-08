import React from "react";

import styles from "./Profile.module.css"; 
import { useState } from "react";
const Profile = ({  loggedUserdata  }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState( loggedUserdata.dp ||"");
  const [preview , setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(e.target.files[0]);
    setPreview(URL.createObjectURL(file));
  };
   
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("profilePic", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        alert("Profile picture uploaded successfully!");
        console.log(data.dp);
        setPreview(null);
        setImage(data.dp);
      } else {0
        alert("Upload failed. Try again!");
        console.log(data.msg);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        {/* Profile Image */}
        <div className={styles.imageContainer}>
          <label for="img">
            <img
              src={
                preview  || image || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              }
              alt="Profile"
              className={styles.profileImage}
            />
          </label>
        </div>
        <input
          type="file"
          id="img"
          className={styles.img}
          onChange={handleFileChange}
        />
        <button className={styles.uploadBtn} onClick={handleUpload}>
          Change Profile-Pic
        </button>
        {/* Name and Status */}
        <h2 className={styles.name}>{loggedUserdata.name}</h2>
        {/* <p className={styles.japaneseName}>むにしわる</p> */}
        <p className={styles.status}>
          This is not your username or PIN. This name will be visible to your
          WhatsApp contacts.
        </p>

        {/* About Section */}
        <div className={styles.about}>
          <h3>About</h3>
          <p>Additional profile information here...</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
