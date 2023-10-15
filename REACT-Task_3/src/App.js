

import Navbar from './components/Navbar';
import Home from './components/Home';
import Message from './components/Message';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import About from './components/About';
import ViewMessage from './components/ViewMessage';
function App() {
  const [msg,setmsg]=useState([
    {
      id:1,name:"siva",message:"HELLO BRO",date:"8/13/2023"
    },
    {
      id:2,name:"midhun",message:"HELLO siva",date:"8/13/2023"
    },
    {
      id:3,name:"sri",message:"HELLO siva",date:"10/13/2023"
    }
  ])
  const [sndname,setsndname]=useState('')
  const [sndmsg,setsndmsg]=useState('')
const nav=useNavigate()
  const submitdata=(e)=>{
    e.preventDefault()
    const date=new Date()
    const day=date.getDate()
    const month=date.getMonth()
    const year=date.getFullYear()
    const newdate=`${day} / ${month+1} / ${year}`
    const newid=msg.length+1
    const newmsg={
      id:newid,
      name:sndname,
      message:sndmsg,
      date:newdate
    
    }
     const newuser=[...msg,newmsg]
     setmsg(newuser)

    nav("/home")
  }
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home 
        msg={msg}
        />}></Route>
        <Route path="/message" element={<Message
        sndname={sndname}
        setsndname={setsndname}
        sndmsg={sndmsg}
        setsndmsg={setsndmsg}
        submitdata={submitdata}
        />}></Route>
        <Route path="/viewmessage/:userid" element={<ViewMessage msg={msg}/>}>

        </Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
