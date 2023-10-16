import style from "./FriendList.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={`${style.isOnlineStatus} ${isOnline ? style.isOnline : style.isOffline}`}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={style.name}>{name}</p>
    </li>
  )
}


export const FriendList = ({ friends }) => {
  return (
    <section className={style.conteiner} >
    <ul style={{ listStyle: "none" }} className={style.friendList}>
      {friends.map((friend) =>
      (<FriendListItem key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline} />)
        
     )}
      </ul>
    </section>
  )
}
















