import AppliedJobs from "../core-ui/Profile/AppliedJobs";
import StudentProfileInfor from "../core-ui/Profile/StudentProfileInfor";
import { useEffect, useState } from "react";
import axios from "axios";
import { STUDENT_API } from "../../utils/constants";
import SessionHelper from "../../utils/SessionHelper";

export default function StudentProfile({studentProfile}) {
  return (
    <div className="student-profile">
      <StudentProfileInfor data={studentProfile}/>
      <AppliedJobs />
    </div>
  );
}
