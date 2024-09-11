import { useContext } from 'react'
import UserContext from '../context/userContext'
UserContext
const Profile = ()=>{
  const {user}= useContext(UserContext)
     if(!user){
        return <h11>no user</h11>
     }
      return <h1>User: is {user}</h1>

  
}

export default Profile
