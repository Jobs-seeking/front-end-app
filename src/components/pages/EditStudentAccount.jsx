import React from "react";
import Button from "../core-ui/Button";
import Input from "../core-ui/Input";

export default function EditStudentAccount() {
  return (
    <div className="edit-account">
      <div className="form-edit">
        <div className="form-edit-account">
          <div class="edit-avatar">
            <img
              class="round"
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="user"
            />
            <div className="user-name">Ngô Luyên</div>
            <div className="upload-picture">
            <button className="btn btn--outline btn-item">Upload a picture</button>
              <input type="file" name="myfile" />
            </div>
          </div>
          <div className="form-edit-information">
        <div className="main_title">EDIT YOUR ACCOUNT</div>
            <form action="">
              <div className="edit-item">
                <div className="edit item-left ">
                  <div className="field_item fields">
                    <label>Username</label>
                    <Input inputStyle="field_item "></Input>
                  </div>
                  <div className="field_item fields">
                    <label>Gender</label>
                    <Input inputStyle="select"> 
                    <select className="select">
                      <option value="">Select an option&hellip;</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Orther</option>
                    </select>
                    </Input>
                  </div>
                  <div className="field_item fields">
                    <label>Email</label>
                    <input type="email" name="email" required="" />
                  </div>
                </div>
                <div className="edit item-right">
                  <div className="field_item fields">
                    <label>Birth of day</label>
                    <Input type="date" inputStyle="field_item "></Input>
                  </div>
                  <div className="field_item fields">
                    <label>Phone</label>
                    <Input inputStyle="field_item "></Input>
                  </div>
                  <div className="fields">
                    <label> Address</label>
                    <textarea className="field_address" defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="buttont-save">
                <Button> SAVE</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
