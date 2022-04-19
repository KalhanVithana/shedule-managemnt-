import React from 'react'
import { Row, Col } from "antd";
import adminImg from "../../../assets/Images/admin.jpg";
export function Adminprofile(props) {
    

    return (
        <div className='adminContainer'>
           
                <div
              className="adminImgSection"
              style={{
                backgroundImage: `url(${adminImg})`,
              }}
            ></div>
        
            
        </div>
    )
}
