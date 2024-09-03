import { useState, lazy } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const Home = lazy(()=>import("./components/Home"))
const Login = lazy(()=>import("./components/Login"))
const Groups = lazy(()=>import("./components/Groups"))
const Chats = lazy(()=>import("./components/Chats"))


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/groups" element={<Groups/>} />
        <Route path="/chats/:chatID" element={<Chats/>} />
      </Routes>
    </Router>
  )
}

export default App
