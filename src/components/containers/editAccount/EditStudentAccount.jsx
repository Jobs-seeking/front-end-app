

import axios from "axios";
import React, { useState, useEffect } from "react";
import { USERS_API_URL } from "../../../utils/constants";
import SessionHelper from "../../../utils/SessionHelper";
import Button from "../../core-ui/Button";
import Input from "../../core-ui/Input";


export default function EditStudentAccount() {
  const [userEdit, setUserEdit] = useState({
    name: "",
    gender: "",
    email: "",
    level: "",
    phone: "",
    address: "",
    isLoading: false,
  });

  const handleEdit = (e) => {
    setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
  };

  const handleUserUpdate = (e) => {
    e.preventDefault();
    console.log("button running......");
    axios
      .post("http://127.0.0.1:8000/api/users", userEdit)
      .then((res) => {
        console.log("post thanhf coong");
      })
      .catch((error) => console.log(error));
  };
  const getData = () => {
    axios
      .get(USERS_API_URL + (SessionHelper.getUserInfo().id))

      .then((res) => {
        setUserEdit(res.data);
      });
  };
  useEffect(() => {
    getData();
    console.log()
  }, []);

  const onChangeImage=(e)=>{
    const image = document.querySelector("#img");
    if (e.target.files.length) {
      const src = URL.createObjectURL(e.target.files[0]);
      image.src = src;
  }
  };
  return (
    <div className="edit-account">
      <div className="form-edit">
        <div className="form-edit-account">
          <div className="edit-avatar">
            <img id="img"
              className="round"
              src={userEdit.image}
              // src={userEdit.image?"http://localhost:8000/image/"+setUserEdit.image:'#'}
              alt="user"
            />
            <div className="user-name" ><h3>{userEdit.name}</h3></div>
            <div className="upload-picture">
              <Button buttonStyle="btn-item">
                Upload a picture
              </Button>
              <input type="file" buttonStyle="btn-item" id="myfile" name="myfile"  onChange={onChangeImage} /> 
            </div>
          </div>
          <div className="form-edit-information">
            <div className="main_title">EDIT YOUR ACCOUNT</div>
            <div>
              <form action="" onSubmit={handleUserUpdate}>
                <div className="edit-item">
                  <div className="edit item-left ">
                    <div className="field_item fields">
                      <label>Username</label>
                      <Input
                        name="name"
                        inputStyle="field_item"
                        value={userEdit.name}
                        onChange={(e) => handleEdit(e)}
                      ></Input>
                    </div>
                    <div className="field_select fields">
                      <label>Gender</label>
                      <select
                        id="selected"
                        name="gender"
                        value={"male"}
                        onChange={(e) => handleEdit(e)}
                      >
                        <option value="">Select an option&hellip;</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Orther</option>
                      </select>
                    </div>
                    <div className="field_item fields">
                      <label>Email</label>
                      <Input
                        type="email"
                        name="email"
                        inputStyle="field_item "
                        value={userEdit.email}
                        onChange={(e) => handleEdit(e)}
                      ></Input>
                    </div>
                  </div>
                  <div className="edit item-right">
                    <div className="field_item fields">
                      <label>Level</label>
                      <select
                        id="selected"
                        name="level"
                        value={"male"}
                        onChange={(e) => handleEdit(e)}
                      >
                        <option value="">Select an option&hellip;</option>
                        <option value="male">Second-year student</option>
                        <option value="female">Third-year student</option>
                      </select>
                    </div>
                    <div className="field_item fields">
                      <label>Phone</label>
                      <Input
                        name="phone"
                        inputStyle="field_item "
                        value={userEdit.phone}
                        onChange={(e) => handleEdit(e)}
                      ></Input>
                    </div>
                    <div className="fields">
                      <label> Address</label>
                      <textarea
                        name="address"
                        className="field_address"
                        value={userEdit.address}
                        onChange={(e) => handleEdit(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="buttont-save">
                  <Button buttonStyle="btn--register__submit"> SAVE</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
