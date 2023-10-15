import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ViewMessage = ({msg}) => {
    const {userid}=useParams()
    
     const [msguser]=msg.filter(ele=>ele.id==userid)

  return (
    <div className='viewmessage'>
    
        <Link to="/home"><buttton className="btn"> Back</buttton></Link>
        <h1 className=''>{msguser.name}</h1>
        <div className='msgcon'>
        <span className='messageside'>Message :</span>
        <h3 className='msgs'> {msguser.message} </h3>
        <h4>Sent On <span className='clr'>{msguser.date}</span></h4>
        </div>

    </div>
  )
}

export default ViewMessage