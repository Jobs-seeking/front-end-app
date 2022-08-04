
import Button from "../core-ui/Button";
import Input from "../core-ui/Input";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function EditStudentAccount() {
  const [userEdit, setUserEdit] = useState({
    name: "",
    gender: "",
    email: "",
    bod: "",
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
      .get("http://127.0.0.1:8000/api/users/1")

      .then((res) => {
        setUserEdit(res.data.data);
      });
  };
  useEffect(() => {
    getData();
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
          <div class="edit-avatar">
            <img id="img"
              class="round"
              src={userEdit.image?"http://localhost:8000/image/"+setUserEdit.image:'#'}
              alt="user"
            />
            <div className="user-name" value={userEdit.name}></div>
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
              {console.log(";;;;;;;;", userEdit)}
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
                        id="select"
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
                      <label>Birth of day</label>
                      <Input
                        name="bod"
                        type="date"
                        inputStyle="field_item "
                        value={userEdit.dateOfBirth}
                        onChange={(e) => handleEdit(e)}
                      ></Input>
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
                  <Button> SAVE</Button>
                  {/* <button type="submit">save</button> */}
                </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
