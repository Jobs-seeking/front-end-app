import AppliedJobs from "../core-ui/Profile/AppliedJobs";
import StudentProfileInfor from "../core-ui/Profile/StudentProfileInfor";

export default function StudentProfile() {
    return (
      <div className="student-profile">
        <StudentProfileInfor />
        <AppliedJobs />
      </div>
    );
}