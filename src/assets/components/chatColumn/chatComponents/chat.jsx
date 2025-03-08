import style from './chat.module.css';
export default function Chat({
  name,
  messages,
  id,
  loggedUser,
  profilePic,
  setSelectedChat,
}) {
  //  console.log(messages);
  console.log(profilePic);
  return (
    <div
      className={style.chatlist}
      onClick={() =>
        setSelectedChat({ name, messages, id, profilePic , loggedUser })
      }
    >
      <img
        src={
          profilePic ||
          "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
        }
        alt="Profile-pic"
        className={style.profiledp}
      />
      <div className={style.chatlistContent}>
        <h3>{name}</h3>
        {/* <p>{message}</p> */}
        <p>hello {name} !</p>
      </div>
    </div>
  );
}
