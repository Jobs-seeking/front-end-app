import Savingjob from "../../layouts/Joblistingg/Savingjob";
import React from "react";
const Form =({data })=> {
        return (
          <>
        <div className="container-model">
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Job Description</h4>
              </div>
              <div className="modal-body">
              <Savingjob data={data}></Savingjob>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}          
export default Form;