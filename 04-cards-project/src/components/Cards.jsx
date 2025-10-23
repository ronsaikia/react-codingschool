import React from 'react'
import {Bookmark} from 'lucide-react'

const Cards = (props) => {
  return (
      <div className='card'>
        <div>
          <div className='top'>
          <img src={props.img} />
          <div>
            <button className='save'>Save <Bookmark size = {20}/></button>
          </div>
        </div>
        <div className="center">
          <h3>{props.company}<span>{props.date}</span></h3>
          <h2>{props.title}</h2>
          <div className='tag'>
              <h4 className='time'>{props.role}</h4>
              <h4 className='designation'>{props.level}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h4>{props.amount}</h4>
            <h6>{props.location}</h6>
          </div> 
          <div className='Applynow'>
            <button>Apply Now</button>
          </div>
        </div>
        
      </div>

    
  )
}

export default Cards
