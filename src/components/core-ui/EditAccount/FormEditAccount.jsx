import React from 'react'
import Button from "../Button";
import Input from '../Input';
export default function FormEditAccount() {
  return (
    <div>
        <form action="">
              <div className="edit-item">
                <div className="edit item-left ">
                  <div className="field_item fields">
                    <label>Username</label>
                    <Input inputStyle="field_item "></Input>
                  </div>
                  <div className="field_select fields">
                    <label>Gender</label>
                    <select id="select">
                      <option value="">Select an option&hellip;</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Orther</option>
                    </select>
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
  )
}
