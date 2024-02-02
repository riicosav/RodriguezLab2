import React, { useState } from 'react';

function Card(props) {

    const [soldOut, setSoldOut] = useState(props.productObject.soldOut);
    const [hoveredImage, setHoveredImage] = useState()
    return (
      <div onMouseEnter={() => setHoveredImage(true)} onMouseLeave={() => setHoveredImage("false")} className={hoveredImage === true ? "card cardspace textfilter" : "card cardspace"} style={{width: "18rem"}}>
         
        <img src={props.productObject.photo} alt="eagle" className={hoveredImage === true ? "imagesize itemfilter" : "imagesize"}></img>
        <p className="cardText">{props.productObject.name}</p>
        <p className="price">
          {props.productObject.price}
        </p>
  
        {soldOut &&(
          <div>
          <p className="cardbottom">SOLD OUT</p>
        </div>
        )
        }
        
      </div>
        
    );
  }

  export default Card;