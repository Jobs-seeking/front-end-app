
import Button from './Button';

import { useState } from 'react';
import Input from './Input';

// import Input from './Input';

const FormApply = () => {

    const [info, setInfo] = useState([]);
    const onChangeHandle = (key, value) => {
        setInfo({ ...info, [key]: value })
    }
    const onSubmitHandle = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', info.name)
        console.log(data);
    }

    return (
        <div className="formApply">
            <h1 className='formApply-heading'>CV APPLICATION FORM</h1>
            <form onSubmit={onSubmitHandle} action="" className='formApply__field'>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <Input type="email" name="email" placeholder="Enter your name" />
                </div>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <Input type="email" name="email" placeholder="Enter your phone number" />
                </div>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <Input type="email" name="email" placeholder="Email address" />
                </div>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <Input type="email" name="email" placeholder="Email address" />
                </div>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <Input type="email" name="email" placeholder="Email address" />
                </div>

                <div className="input-field">
                    <select className='select' onChange={(e) => onChangeHandle('position', e.target.value)}>
                        <option value="0">---Choose---</option>
                        <option value="1">Mobile</option>
                        <option value="2">Testing</option>
                        <option value="3">Front end</option>
                        <option value="4">Back end</option>
                        <option value="4">Full Stack </option>
                        <option value="4">BA</option>
                    </select>
                </div>
                <div className="input-field">
                    <select className='select'  onChange={(e) => onChangeHandle('year_experience', e.target.value)}>
                        <option value="0">---Year Experience---</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3 </option>
                        <option value="3">4</option>
                    </select>
                </div>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <Input type="file" name="email" placeholder="Email address" />
                </div>
                <Button buttonStyle="btn--solid">Apply</Button>
                {/* <div className="input-field">
                    <label htmlFor="email"></label>
                    <Input type="email" name="email" placeholder="Email address"/>
                </div> */}

                {/* <div className="row">
                    <div className="col-left">
                        <label> Name</label>
                        <input type="text" className="form-input" placeholder="Enter your name" onChange = {(e) => onChangeHandle('name', e.target.value)} />
                    </div>
                    <div className="col-right">
                        <label>Phone</label>
                        <input type="text" className="form-input" placeholder="Enter your name" onChange = {(e) => onChangeHandle('phone', e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-left">
                        <label>Your email</label>
                        <input type="email" id="email" placeholder="Enter your email" onChange = {(e) => onChangeHandle('email', e.target.value)}/>
                    </div>
                    <div className="col-right">
                        <label>Your address</label>
                        <input type="text" id="text" placeholder="Enter your address" onChange = {(e) => onChangeHandle('address', e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-left">
                        <label >Position Applying for</label>
                        <select onChange = {(e) => onChangeHandle('position', e.target.value)}>
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
                        <select onChange = {(e) => onChangeHandle('year_experience', e.target.value)}>
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
                    <input type="file" id="" placeholder="Ex:eamail@gmail.com" onChange = {(e) => onChangeHandle('cover_letter', e.target.files[0].name)}/>
                </div>
                <div className="row">
                    <label >Upload your CV</label>
                    <input type="file" id="upload-photo" placeholder="Ex:eamail@gmail.com" onChange = {(e) => onChangeHandle('cv', e.target.files[0].name)}/>
                </div>
                <div>
                    <Button>Submit</Button>
                </div> */}
            </form >
        </div >
    )

}
export default FormApply;