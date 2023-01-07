import React from "react";

export default function Card(props) {
    console.log(props)
    return(
    <div className="card">
        <img src={`${props.img}`} className="card--image"/>
        <div className='card--stats'>
            <span className="material-symbols-outlined">star</span>
            <span>{props.ratings} </span>
            <span>({props.reviewCount})  .</span>
            <span>{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>

            
        
    </div>
        
    )

     
}
