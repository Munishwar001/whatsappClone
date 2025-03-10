import style from './chat.module.css';
export default function Chat({
  name,
  onlineUser,
  id,
  loggedUser,
  profilePic,
  active,
  setSelectedChat,

}) {
  //  console.log(messages);
  console.log(profilePic);
  return (
    <div
      className={style.chatlist}
      onClick={() =>
        setSelectedChat({ name, id, onlineUser ,  profilePic ,active ,  loggedUser })
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
        <p>Click here to open chat !</p>
      </div>
    </div>
  );
}
