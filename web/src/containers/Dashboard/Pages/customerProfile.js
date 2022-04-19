import React from 'react'
import customerImg from "../../../assets/Images/dash7.png";
export function Customerprofile(props) {
    

    return (
        <div className='customerContainer'>
           
                <div
              className="customerImgSection"
              style={{
                backgroundImage: `url(${customerImg})`,
              }}
            ></div>
        
            
        </div>
    )
}
