import { MdLocationOn } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

export default function StudentProfileInfor() {
  return (
    <div className="student-profile-infor">
      <div className="student-profile-infor__top">
        <div className="student-profile-infor__top__left">
          <img
            src="https://play-lh.googleusercontent.com/okxWlMuA3h9G1vVy-MJY57V300Mykjc8yhbJGtQCuYXOCC1wiRFvk1XmQLuycR3Rgh8"
            alt=""
          />
        </div>
        <div className="student-profile-infor__top__mid">
          <h4>Nguyen Thi Vinh Uyen</h4>
          <p>Second-year student</p>
          <p>
            <MdLocationOn className="icon" /> Son Tra - Da Nang
          </p>
        </div>
        <div className="student-profile-infor__top__right">
          <FiEdit className="icon" />
        </div>
      </div>
      <div className="student-profile-infor__bot">
        <table>
          <tbody>
            <tr>
              <td>Position</td>
              <td>:</td>
              <td className="data-col">Second-year student</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>:</td>
              <td className="data-col">101B Le Huu Trac - Son Tra - Da Nang</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>:</td>
              <td className="data-col">0832748725</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td className="data-col">
                uyen.nguyen23@student.passerellesnumeriques.org
              </td>
            </tr>
            <tr>
              <td>Linkedin</td>
              <td>:</td>
              <td className="data-col">UyenNguyen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
