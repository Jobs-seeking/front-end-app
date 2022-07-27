import React from "react";
import FormEditAccount from "../core-ui/EditAccount/FormEditAccount";
import EditAvatar from "../core-ui/EditAccount/EditAvatar";

export default function EditStudentAccount() {
  return (
    <div className="edit-account">
      <div className="form-edit">
        <div className="form-edit-account">
          <EditAvatar/>
          <div className="form-edit-information">
          <div className="main_title">EDIT YOUR ACCOUNT</div>
            <FormEditAccount/>
          </div>
        </div>
      </div>
    </div>
  );
}
