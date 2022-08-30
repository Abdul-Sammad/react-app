import React from 'react';
import './index.css';







const Cards = ({
    title,
    subtitle,
    description,
    logo,
    para,
}) =>{

    return(
            <div className='card subcard' >
  <div class="card-body">
    <h5 class="card-title service" >{title}</h5>
     <img src={logo} width="40px" height="40px"></img>
    <h6 class="card-subtitle mb-2 text-muted">{subtitle}</h6>
    <p class="card-text">{description}</p>
    <p>------------------------</p>
    <p>sodales fermentum</p>
    <p>Qquam integar</p>
    <p>Nibh arcu</p>
   
    
  </div>

</div>

    )
}

export default Cards;



