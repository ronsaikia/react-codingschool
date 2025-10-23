import React from 'react'

const Card = (props) => {


    console.log(props);
    return (
        <div>
        <div className='card' >
                <img src={props.img} />
                <h1>{props.user}</h1>
                <p>{props.role}</p>
                <button>View Profile</button>
            </div>
        </div>
    )
    }

export default Card
