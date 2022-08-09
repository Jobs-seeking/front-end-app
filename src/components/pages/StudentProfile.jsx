import AppliedJobs from "../core-ui/Profile/AppliedJobs";
import StudentProfileInfor from "../core-ui/Profile/StudentProfileInfor";
import { useEffect, useState } from "react";
import axios from "axios";
import { STUDENT_API } from "../../utils/constants";
import LocalStorageHelper from "../../utils/LocalStorageHelper";

export default function StudentProfile() {
  const userId = LocalStorageHelper.getUserId()

  const [data, setData] = useState({});
  const getData = async () => {
    axios.get(STUDENT_API + `/${userId}`).then((res) => {
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
