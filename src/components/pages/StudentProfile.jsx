import AppliedJobs from "../core-ui/Profile/AppliedJobs";
import StudentProfileInfor from "../core-ui/Profile/StudentProfileInfor";
import { useEffect, useState } from "react";
import axios from "axios";
import { STUDENT_API } from "../../utils/constants";

export default function StudentProfile() {
  const hai = 2;

  const [data, setData] = useState({});
  const [seeMore, setSeeMore] = useState(false)
  const getData = async () => {
    axios.get(STUDENT_API + `/${hai}`).then((res) => {
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
