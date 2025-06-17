import { useState } from "react"

export default function TwitterFollowCard( {formatUserName, userName , name , initialIsFollowing } ){
    const srcImage = `https://unavatar.io/deviantart/${userName}`
    const [isFollowing , setItFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-buttonFollow is-following' : 'tw-followCard-buttonFollow'
    const changeState = () => {
      setItFollowing(!isFollowing)
    }
    return (
        <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
        className="tw-followCard-avatar" 
        alt="User-photo" src={srcImage}/>
        <div className="tw-followCard-info">
          <strong className="tw-followCard-nameUser">{userName}</strong>
          <span className="tw-followCard-user">{formatUserName(name)}</span>
        </div>
      </header>
      <aside>
          <button onClick={changeState} className={buttonClassName}>
            <span className="button-text-following">{text}</span>
            <span className="button-text-following-stop">Dejar de seguir</span>
          </button>
      </aside>
    </article>
    )
}