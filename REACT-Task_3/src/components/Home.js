import React from 'react'
import { Link } from 'react-router-dom'
const Home = ({msg}) => {
  return (
    <div className='home'>
        <div className='msgcon'>
            <div className='text'>
                MESSAGES

            </div>
            <div className='msg'>
              
                  
                {
                    msg.map(ms=>(
                        <div className='usermsgs'>
                      <Link to={`/viewmessage/${ms.id}`}> <div className='username'>{ms.name}</div></Link> 
                        <div className='usermsg'>{ (ms.message.length>10)?ms.message.substr(0,3)+"...":ms.message.toLowerCase()}</div>
                        <div className='userdate'>Sent on <br/>{ms.date}</div>
                        </div>
                    ))
                }
                
            </div>
            </div>
    </div>
  )
}

export default Home