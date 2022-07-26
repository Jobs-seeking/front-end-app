function Form(){
    return(
        <div className="container">
        <div type="button" className="btn btn-info " data-toggle="modal" data-target="#myModal">See the description</div>
        {/* Modal */}
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Job Description</h4>
              </div>
              <div className="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}          
export default Form;