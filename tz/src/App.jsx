import "./App.css"
import TwitterFollowCard from "./TwitterFollowCard"

const users = [
  {
    userName: "Midudev",
    isFollowing: true,
    name: "Midu"
  },
  {
    userName: "SkyBlue",
    isFollowing: true,
    name: "skYB"
  },
  {
    userName: "Pepe",
    isFollowing: false,
    name: "Pepe231"
  }
]
function App(){
  const formatUserName = (name) => `@${name}`
  return(
    <section className="App">
    {users.map(user => {
      const {userName, isFollowing, name} = user
      return (
        <TwitterFollowCard 
        key={userName}
        userName={userName}
        initialIsFollowing={isFollowing}
        name={name}
        formatUserName={formatUserName}
        />
      )
    })}
    </section>
  )
}

export default App