import Login from "./components/login"
import Profile from "./components/profile"
import UserContextProvider from "./context/userContextProvider"


function App() {


  return (
    <UserContextProvider>
        <Login></Login>
        <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
