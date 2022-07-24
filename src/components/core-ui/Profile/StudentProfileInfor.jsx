import { MdLocationOn } from "react-icons/md";
import { FiEdit } from "react-icons/fi"

export default function StudentProfileInfor() {
    return (
        <div className="student-profile-infor">
            <div className="student-profile-infor__top">
                <div className="student-profile-infor__top__left">
                    <img src="https://play-lh.googleusercontent.com/okxWlMuA3h9G1vVy-MJY57V300Mykjc8yhbJGtQCuYXOCC1wiRFvk1XmQLuycR3Rgh8" alt="" />
                </div>
                <div className="student-profile-infor__top__mid">
                    <p>Nguyen Thi Vinh Uyen</p>
                    <p>Project Manager</p>
                    <p><MdLocationOn className="icon" /> Son Tra - Da Nang</p>
                </div>
                <div className="student-profile-infor__top__right">
                    <FiEdit className="icon" />
                </div>
            </div>
            <div className="student-profile-infor__bot">
                <p>Current position</p>
                <p>Industry</p>
                <p>Phone Number</p>
                <p>Email</p>
                <p>Linked</p>
            </div>
        </div>
    )
}