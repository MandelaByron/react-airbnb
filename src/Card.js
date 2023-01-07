import React from "react";

export default function Card() {
    return(
    <div className="card">
        <img src="https://images.unsplash.com/photo-1598623335306-5d0040e41f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXRobGV0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card--image"/>
        <div className='card--stats'>
            <span class="material-symbols-outlined">star</span>
            <span>5.0</span>
            <span>(6) .</span>
            <span>USA</span>
        </div>
        <p>No pain No gain. Zara's everyday workout routine.</p>
        <p><span className="bold">From $136</span> / person</p>

            
        
    </div>
        
    )

     
}
