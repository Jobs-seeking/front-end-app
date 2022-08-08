import { MdOutlineLocationOn } from "react-icons/md";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import React from "react";
const Tab =(props)=> {
        return (
            <>  
                <div className='container-tab'>
            <div className="location">
                <div className="icon-location"><MdOutlineLocationOn/></div>
                <div>
                    <p className="address">{props.location}</p>
                </div>
            </div>
            <div className="location">
                <div className="icon-location"><RiMoneyPoundCircleLine/></div>
                <div>
                <p>{props.salaryjob}</p>
                </div>
            </div>
        </div>      
            </>
        );
}
export default Tab;