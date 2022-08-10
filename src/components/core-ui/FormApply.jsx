
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
                    <Input type="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <Input type="email" name="email" placeholder="Email your address" />
                </div>

                <div className="input-field">
                    <select className='select' onChange={(e) => onChangeHandle('position', e.target.value)}>
                        <option value="0">---Position applying for---</option>
                        <option value="1">Mobile</option>
                        <option value="2">Testing</option>
                        <option value="3">Front end</option>
                        <option value="4">Back end</option>
                        <option value="4">Full Stack </option>
                        <option value="4">BA</option>
                    </select>
                </div>
                <div className="input-field">
                    <select className='select' onChange={(e) => onChangeHandle('year_experience', e.target.value)}>
                        <option value="0">---Year Experience---</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3 </option>
                        <option value="3">4</option>
                    </select>
                </div>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <Input id= "inputTag" type="file" name="email" />
                </div>
                <div className="input-field">
                    <label htmlFor="email"></label>
                    <textarea type="text" name="" placeholder="Enter your cover letter" />
                </div>

                <Button buttonStyle="btn--solid">Apply</Button>
            </form >
        </div >
    )

}
export default FormApply;