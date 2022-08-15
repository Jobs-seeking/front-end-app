import AppliedJobs from "../core-ui/Profile/AppliedJobs";
import StudentProfileInfor from "../core-ui/Profile/StudentProfileInfor";
import { useEffect, useState } from "react";
import axios from "axios";
import { STUDENT_API } from "../../utils/constants";
import SessionHelper from "../../utils/SessionHelper";

export default function StudentProfile() {
  const userInfo = SessionHelper.getUserInfo()

  const [data, setData] = useState({});
  const getData = async () => {
    axios.get(STUDENT_API + userInfo.id).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="student-profile">
      <StudentProfileInfor data={data} />
      <AppliedJobs />
    </div>
  );
}
