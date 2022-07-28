import { MdOutlineLocationOn } from "react-icons/md";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
function Tab(){
    return(
        <div className='container-tab'>
            <div className="location">
                <div className="icon-location"><MdOutlineLocationOn/></div>
                <div>
                    <p className="Address">Da nang</p>
                </div>
            </div>
            <div className="location">
                <div className="icon-location"><RiMoneyPoundCircleLine/></div>
                <div>
                <p>30,000$</p>
                </div>
            </div>
        </div>
    )
}
            
export default Tab;