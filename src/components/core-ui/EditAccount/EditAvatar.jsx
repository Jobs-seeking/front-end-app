import React from 'react'
import Button from "../Button";
export default function EditAvatar() {
  return (
    <div>
        <div class="edit-avatar">
            <img
              class="img-item"
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="user"
            />
            <div className="user-name">Ngô Luyên</div>
            <div className="upload-picture">
            <Button buttonStyle="btn-item">Upload a picture</Button>
              <input type="file" name="myfile" />
            </div>
          </div>
    </div>
  )
}
