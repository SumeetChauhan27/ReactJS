import React from 'react'

const Card = (props) => {
  // console.log(props.user);
  console.log(props.user, props.age);
  // console.log(props);
  return (

    <div className="card"  >
      <img src={props.img} alt="" />
      <h1><u> {props.user} </u></h1>
      <div>
        <h3>{props.age} </h3>
      </div>
      <p>
        Hey,I am {props.user} and my age is {props.age} <br />and currently i am learninig ReactJS
      </p>
      <button >View Profile</button>
    </div>

  )
}

export default Card
