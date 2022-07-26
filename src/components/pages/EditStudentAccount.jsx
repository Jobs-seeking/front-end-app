import React from "react";
import Button from "../core-ui/Button";

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
            <button class="btn btn--outline btn-item">Upload a picture</button>
              <input type="file" name="myfile" />
            </div>
          </div>
          <div className="form-edit-information">
        <div className="main_title">EDIT YOUR ACCOUNT</div>
            <form action="">
              <div className="edit-item">
                <div className="edit item-left ">
                  <div className="field_username fields">
                    <label>Username</label>
                    <input type="text" name="Username" required="" />
                  </div>
                  <div className="field_gender fields">
                    <label>Gender</label>
                    <select className="select">
                      <option value="">Select an option&hellip;</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Orther</option>
                    </select>
                  </div>
                  <div className="field email fields">
                    <label>Email</label>
                    <input type="email" name="email" required="" />
                  </div>
                </div>
                <div className="edit item-right">
                  <div className="field_bod fields">
                    <label>Birth of day</label>
                    <input type="tel" name="phone" id="Phone_" />
                  </div>
                  <div className="field_phone fields">
                    <label>Phone</label>
                    <input type="tel" name="phone" />
                  </div>
                  <div className="fields">
                    <label htmlFor="Address_">Address</label>
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
