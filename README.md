# WhatsApp Clone

Welcome to the **WhatsApp Clone** project! This is a real-time chat application built using **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.io** to enable seamless communication between users.

## 🚀 Features
- **Real-time Messaging** using WebSockets
- **User Authentication** (Sign Up / Login)
- **Private Chats**
- **Profile Management**
- **User Status Indicators** (Online, Offline)
- **Emojis & Multimedia Support** (Images)
- **Notifications** for new messages

## 🛠️ Tech Stack
- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **WebSockets:** Socket.io for real-time communication
- **Authentication:** JWT (JSON Web Token)

## 📂 Project Structure
```
whatsapp-clone/
├── client/       # React frontend
├── server/       # Node.js & Express backend
├── models/       # Mongoose schemas
├── routes/       # API routes
├── controllers/  # Business logic for API endpoints
├── config/       # Configuration files (DB, Auth, etc.)
└── README.md     # Project documentation
```

## 📌 Installation
### Prerequisites
Ensure you have **Node.js**, **MongoDB**, and **npm** installed.

### Steps to Run
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Munishwar001/whatsappClone.git
   cd whatsappClone
   ```

2. **Install Dependencies:**
   ```sh
   cd server && npm install
   cd whatappClone && npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the `server/` directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Start the Backend Server:**
   ```sh
   cd Backend-whataapp-clone
   node index.js
   ```

5. **Start the Frontend:**
   ```sh
   cd whatappClone
   npm start
   ```

6. **Open the App:**
   Visit `http://localhost:5173` in your browser.

## 💡 Future Enhancements
- **Voice & Video Calls**
- **Message Reactions & Stickers**
- **End-to-End Encryption**
- **Dark Mode UI*

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**.

## 📞 Contact
For any issues or suggestions, feel free to reach out!
- **GitHub:** [Munishwar001](https://github.com/Munishwar001)

