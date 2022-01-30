import React from 'react'
import Icon from '../images/Icon.png'
import blogData from './blogData'
import Picture1 from '../images/Picture1.png'
import Picture2 from '../images/Picture2.png'
import Picture3 from '../images/Picture3.png'


function Card(props) {
  const coverImg = blogData.map(img => {
    return (
      <blogData
       Picture1 ={Picture1}
       Picture2={Picture2} 
       Picture3 ={Picture3}
        
        />
    )
})

  return <div className="cards">
      <div className='card--item'>
      <div className='picture'><img src={`../images/${blogData.coverImg}`}/></div>
      <div className="Content">
      <span><div><img src= {Icon}/></div> <h4>{props.name}</h4> <a href="#">View On Google Map</a></span>
      <h1>{props.name}i</h1>
      <h4>{props.date}</h4>
      <p>{props.text}</p>
      </div>
  </div>
  </div>
}


export default Card;
