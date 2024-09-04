import { useState, lazy } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute.jsx'

const Home = lazy(()=>import("./components/Home"))
const Login = lazy(()=>import("./components/Login"))
const Groups = lazy(()=>import("./components/Groups"))
const Chats = lazy(()=>import("./components/Chats"))


function App() {
  const [user,setUser] = useState(true)

  return (
    <Router>
      <Routes>
        
        <Route element={<ProtectRoute user={user}/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/groups" element={<Groups/>} />
          <Route path="/chats/:chatID" element={<Chats/>} />
        </Route>

        <Route path="/login" element={
          <ProtectRoute user={!user} redirect="/">
          <Login user={user} setUser={setUser}/>
          </ProtectRoute>
          } />
      </Routes>
    </Router>
  )
}

export default App
