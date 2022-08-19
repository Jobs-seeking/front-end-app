
import React, { useState, useEffect } from "react";
import SessionHelper from "../../utils/SessionHelper";
import EditCompanyAccount from "../containers/editAccount/EditCompanyAccount";

import EditStudentAccount from "../containers/editAccount/EditStudentAccount";

export default function EditAccount() {

  return (
    <div className="edit-account__page">
      {SessionHelper.getUserInfo().role==="company"? <EditCompanyAccount/>: <EditStudentAccount/>}
    </div>
  );
}
