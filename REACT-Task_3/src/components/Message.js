import React from 'react'

const Message = ({sndmsg,setsndmsg,setsndname,sndname,submitdata}) => {
  return (
    <div className='message'>

    <h2>SEND MESSAGE</h2>
    <form className='sendmsg'  onSubmit={submitdata}>
   <div>
   <label>Enter Name :</label> <input type="text" value={sndname} onChange={(e)=>setsndname(e.target.value)} required></input>
   </div>
   <div>
   <label>Enter Message :</label> <input type="text"  value={sndmsg} onChange={(e)=>setsndmsg(e.target.value)} required></input>
   </div>
    <div>
        <input type="submit" value="send"/>
    </div>
    </form>
    </div>
  )
}

export default Message