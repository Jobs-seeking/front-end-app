
const FormApply = () => {
    return(
        <>
            {/* <h1>CV APPLICATION FORM</h1> */}
            <div className="core-ui__formApply">
                <form action="" className="form">
                    <div className="row">
                        <div className="col-left">
                            <label> Name</label>
                            <input type="text" className="form-input" placeholder="Enter your first name" />
                        </div>
                        <div className="col-right">
                            <label>Phone</label>
                            <input type="text" className="form-input" placeholder="Enter your last name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-left">
                            <label>Your email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email"/>
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-left">
                            <label >Position Applying for</label>
                                <select>
                                    <option value="0">---Choose---</option>
                                    <option value="1">Mobile</option>
                                    <option value="2">Testing</option>
                                    <option value="3">Front end</option>
                                    <option value="4">Back end</option>
                                    <option value="4">Full Stack </option>
                                    <option value="4">BA</option>
                                    </select>
                        </div>
                        <div className="col-right">
                            <label >Year Experience</label>
                                <select>
                                    <option value="0">---Year Experience---</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3 </option>
                                    <option value="3">4</option>
                                    </select>
                        </div>
                    </div>
                    <div className="row">
                        <label >Upload Your Cover Letter</label>
                        <input type="file" id="" placeholder="Ex:eamail@gmail.com"/>
                    </div>
                    <div className="row">
                        <label >Upload your CV</label>
                        <input type="file" id="upload-photo" placeholder="Ex:eamail@gmail.com"/>
                    </div>
                    <div>
                        <button className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FormApply;