import styles from "./chatWindow.module.css";
import ChatMsgHeader from "./chatMsgHeader/chatMsgHeader";
import EmojiPicker from "emoji-picker-react";
import { useState, useEffect } from "react";
import Socket from "../socket";
export default function ChatWindow({ selectedChat }) {
  const [focus, setFocus] = useState(false);
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState(false);
  const [messages, setMessages] = useState(selectedChat.messages || []);
  const [sendingImg, setSendingImg] = useState(null);
  const [sendImgToogle, setSendImgToogle] = useState(false);
  const [sendingImgPreview , setSendingImgPreview] = useState(null);
  const[imgUrl , setImageUrl] = useState("");

  const sendBox = (e) => {
    const file = e.target.files[0];
    setSendingImg(e.target.files[0]);
    setSendingImgPreview(URL.createObjectURL(file));
  };
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/messages/${selectedChat.id}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        console.error("Error fetching messages");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch messages when chat is selected

  useEffect(() => {
    fetchMessages();
  }, [ ,selectedChat]);

  console.log("loggedUser", selectedChat.loggedUser);
  const handleSend = async (text) => {
    if (text.trim() === "" || text ==null ) {
      alert("Please Type Something or Select Any Image using plus Sign 🙏");
      return;
    }
    console.log(
      selectedChat.name,
      selectedChat.id,
      selectedChat.messages
    );
    try { 
      Socket.emit("sendMessage", {
        sender: selectedChat.loggedUser,
        receiver: selectedChat.id,
         message : text, 
      });
      setMessage("");
      setSendingImg(null);
      setSendingImgPreview(null);
      setSendImgToogle(false);
      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

    const handleSendImg = async () => {
      if (!sendingImg) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("MsgPic", sendingImg);

    try {
      const response = await fetch("http://localhost:8000/upload/img",{
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await response.json();    
      if (response.ok) {         
        alert("Profile picture uploaded successfully!");
         setImageUrl(data.imageUrl)
        console.log(data.imageUrl);
        handleSend(data.imageUrl);
      } else {
        alert("Upload failed. Try again!");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    }

  const addEmoji = (emojid) => {
    setMessage((prevMessage) => prevMessage + emojid.emoji);
  };
  
  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Other", text: message },
      ]);
    };

    Socket.on("receiveMessage", receiveMessage);
    return () => {
      Socket.off("receiveMessage", receiveMessage); // Cleanup listener
    };
  }, [Socket]);
  return (
    <>
      <div className={styles.container}>
        <ChatMsgHeader selectedChat={selectedChat} />

        <div className={styles.msgBox}>
  {messages.map((msg) => {
    const isImageUrl = /\.(jpeg|jpg|gif|png|webp|svg)$/i.test(msg.message);
    
    return (
      <p
        key={msg._id}
        className={msg.sender._id === selectedChat.id ? styles.otherMessage : styles.myMessage}
      >
        {isImageUrl ? (
          <img
            src={msg.message}
            alt="Sent image"
            className={styles.sendingImg}
          />
        ) : (
          msg.message
        )}
      </p>
    );
  })}
</div>


        <footer className={styles.sendBox}>
          <div className={styles.picker} style={{ display: emoji ? "block" : "none" }}>
            <EmojiPicker onEmojiClick={addEmoji} />
          </div>
  
          <div className={styles.sendingImgDiv} style={{ display :sendImgToogle?"block":"none"}}>
            <div>
              <img src={sendingImgPreview} alt="" className={styles.sendingImg} />
              <span className={styles.sendSvg} onClick={()=> handleSendImg()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF">
                  <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                </svg>
              </span>
            </div>
          </div>
          <input
            type="file"
            id="msgFile"
            className={styles.msgFile}
            onChange={sendBox}
          />
          <span style={{ marginLeft: "40px" }} onClick={() => setSendImgToogle((prev) => !prev)}>
            <label htmlFor="msgFile" className={styles.msgLabel}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
            </label>
          </span>
          <div className={styles.msg}>
            <span
              onClick={() => {
                setEmoji(!emoji);
                setSendImgToogle(false);
              }}
            >
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
              >
                <title>expressions</title>
                <path
                  d="M8.49893 10.2521C9.32736 10.2521 9.99893 9.5805 9.99893 8.75208C9.99893 7.92365 9.32736 7.25208 8.49893 7.25208C7.6705 7.25208 6.99893 7.92365 6.99893 8.75208C6.99893 9.5805 7.6705 10.2521 8.49893 10.2521Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M17.0011 8.75208C17.0011 9.5805 16.3295 10.2521 15.5011 10.2521C14.6726 10.2521 14.0011 9.5805 14.0011 8.75208C14.0011 7.92365 14.6726 7.25208 15.5011 7.25208C16.3295 7.25208 17.0011 7.92365 17.0011 8.75208Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.8221 19.9799C15.5379 21.2537 13.8087 21.9781 12 22H9.27273C5.25611 22 2 18.7439 2 14.7273V9.27273C2 5.25611 5.25611 2 9.27273 2H14.7273C18.7439 2 22 5.25611 22 9.27273V11.8141C22 13.7532 21.2256 15.612 19.8489 16.9776L16.8221 19.9799ZM14.7273 4H9.27273C6.36068 4 4 6.36068 4 9.27273V14.7273C4 17.6393 6.36068 20 9.27273 20H11.3331C11.722 19.8971 12.0081 19.5417 12.0058 19.1204L11.9935 16.8564C11.9933 16.8201 11.9935 16.784 11.9941 16.7479C11.0454 16.7473 10.159 16.514 9.33502 16.0479C8.51002 15.5812 7.84752 14.9479 7.34752 14.1479C7.24752 13.9479 7.25585 13.7479 7.37252 13.5479C7.48919 13.3479 7.66419 13.2479 7.89752 13.2479L13.5939 13.2479C14.4494 12.481 15.5811 12.016 16.8216 12.0208L19.0806 12.0296C19.5817 12.0315 19.9889 11.6259 19.9889 11.1248V9.07648H19.9964C19.8932 6.25535 17.5736 4 14.7273 4ZM14.0057 19.1095C14.0066 19.2605 13.9959 19.4089 13.9744 19.5537C14.5044 19.3124 14.9926 18.9776 15.4136 18.5599L18.4405 15.5576C18.8989 15.1029 19.2653 14.5726 19.5274 13.996C19.3793 14.0187 19.2275 14.0301 19.0729 14.0295L16.8138 14.0208C15.252 14.0147 13.985 15.2837 13.9935 16.8455L14.0057 19.1095Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              value={message}
              onChange={(e) => {
                setFocus(true);
                setMessage(e.target.value);
              }}
              placeholder="Type a message"
              className={styles.typemsg}
            />
            <span>
              <svg
                style={{ display: focus ? "none" : "block" }}
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
              >
                <title>ptt</title>
                <path
                  fill="currentColor"
                  d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"
                ></path>
              </svg>
              <svg
                style={{ display: focus ? "block" : "none" }}
                onClick={() => {
                  setFocus(false);
                  handleSend(message);
                  fetchMessages();
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
