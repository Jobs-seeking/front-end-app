import { MdLocationOn } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function StudentProfileInfor({ data }) {
  const clickProfileHandler = () =>{

  }
  return (
    <div className="student-profile-infor">
      <div className="student-profile-infor__top">
        <div className="student-profile-infor__top__left">
          <img src={data.img} alt="" />
        </div>
        <div className="student-profile-infor__top__mid">
          <h4>{data.name}</h4>
          <p>{data.gender}</p>
          <p>
            <MdLocationOn className="icon" />
            {data.address}
          </p>
        </div>
        <div className="student-profile-infor__top__right">
          <Link to='/edit-profile'> 
          <FiEdit className="icon" onClick={clickProfileHandler()}/>
          </Link>
        </div>
      </div>
      <div className="student-profile-infor__bot">
        <table>
          <tbody>
            <tr>
              <td>Position</td>
              <td>:</td>
              <td className="data-col">{data.position}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>:</td>
              <td className="data-col">{data.address}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>:</td>
              <td className="data-col">{data.phoneNumber}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td className="data-col">{data.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

