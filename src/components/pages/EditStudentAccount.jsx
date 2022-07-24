import React from "react";

export default function EditStudentAccount() {
  return (
    <div className="edit-account">
      <div className="form-edit">
            <div className="main_title">Edit your account!</div>
        <div className="form-edit-account">
          <div class="edit-avatar">
            <img
              class="round"
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="user"
            />
            <div className="user-name">Ngô Luyên</div>

            <div class="buttons">
              <button class="upload-picture">Upload picture</button>
            </div>
          </div>
          <div className="form-edit-information">
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
              <div className="button-save">
              <button className="btn btn-edit" type="submit">
                SAVE
              </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
