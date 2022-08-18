import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { COMPANIES_API, STUDENT_API } from "../../utils/constants";
import SessionHelper from "../../utils/SessionHelper";
import CompanyProfile from "./CompanyProfile";
import StudentProfile from './StudentProfile';
const Profile = ()=>{
    const [userInfo, setUserInfo] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const getUserInfo = async () => {
            setUserInfo((await axios.get(STUDENT_API,{student: id})).data.data)
            setUserInfo((await axios.get(COMPANIES_API, {companyId: id})).data.data)
        }
        if (!id) {
            if (!SessionHelper.isUserLogedIn()) {
                return navigate("/login")
            }
            setUserInfo(SessionHelper.getUserInfo())
        }
        else {
            getUserInfo()
        }
    }, [])
    return(
        <>
        {userInfo.role==="company"? <CompanyProfile companyProfile={userInfo}/>: <StudentProfile studentProfile={userInfo}/>}
        </>
    )
}
export default Profile;