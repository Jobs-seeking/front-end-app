import { MdLocationOn } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

// export default function StudentProfileInfor() {
//   return (
//     <div className="student-profile-infor">
//       <div className="student-profile-infor__top">
//         <div className="student-profile-infor__top__left">
//           <img
//             src="https://play-lh.googleusercontent.com/okxWlMuA3h9G1vVy-MJY57V300Mykjc8yhbJGtQCuYXOCC1wiRFvk1XmQLuycR3Rgh8"
//             alt=""
//           />
//         </div>
//         <div className="student-profile-infor__top__mid">
//           <h4>Nguyen Thi Vinh Uyen</h4>
//           <p>Male</p>
//           <p>
//             <MdLocationOn className="icon" /> 101B Le Huu Trac - Son Tra - Da
//             Nang
//           </p>
//         </div>
//         <div className="student-profile-infor__top__right">
//           <FiEdit className="icon" />
//         </div>
//       </div>
//       <div className="student-profile-infor__bot">
//         <table>
//           <tbody>
//             <tr>
//               <td>Position</td>
//               <td>:</td>
//               <td className="data-col">Second-year student</td>
//             </tr>
//             <tr>
//               <td>Address</td>
//               <td>:</td>
//               <td className="data-col">101B Le Huu Trac - Son Tra - Da Nang</td>
//             </tr>
//             <tr>
//               <td>Phone</td>
//               <td>:</td>
//               <td className="data-col">0832748725</td>
//             </tr>
//             <tr>
//               <td>Email</td>
//               <td>:</td>
//               <td className="data-col">
//                 uyen.nguyen23@student.passerellesnumeriques.org
//               </td>
//             </tr>
            
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

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
          <FiEdit className="icon" onClick={clickProfileHandler()}/>
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

