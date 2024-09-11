import { useContext, useState } from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [user, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser(user)
    }
  return (
    <div>
      <h2>login</h2>
      <input type="text" placeholder='name' value={user} onChange={(e)=>setUserName(e.target.value)}/>
      <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>submit</button>
     
    </div>
  )
}

export default Login
