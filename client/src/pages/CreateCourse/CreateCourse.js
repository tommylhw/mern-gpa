import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CreateCourse/CreateCourse.css';

import Btn from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';

const CreateCourse = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        code: "",
        credit: "",
        gpa: "",
    });

    const updateForm = (value) => {
        return setForm((prev) => {
            return {...prev, ...value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit");

        axios
            .post('http://localhost:8082/api/courses', form)
            .then((res) => {
                setForm({
                    code: "",
                    credit: "",
                    gpa: "",
                });

                navigate('/');
            })
            .catch((error) => {
                console.log("Error in creating record");
            })
    }

    return (
        <div>
            {/* <h3>Create New Course Record</h3> */}
            <div className='header-container'>
                <h3>Create Course Record</h3>
                <Link to='/'>
                    <Btn 
                        btnText="Home"
                    />
                </Link>
                
            </div>

            <hr />

            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='code'>Course Code</label>
                    <InputField
                        type="text"
                        className="input-code input"
                        id='code'
                        value={form.code}
                        onChange={(e) => updateForm({[e.target.id]: e.target.value})}
                    />

                    <label htmlFor='credit'>Credit</label>
                    <InputField
                        type="text"
                        className="input-credit input"
                        id='credit'
                        value={form.credit}
                        onChange={(e) => updateForm({[e.target.id]: e.target.value})}
                    />

                    <label htmlFor='gpa'>GPA</label>
                    <InputField
                        type="text"
                        className="input-gpa input"
                        id='gpa'
                        value={form.gpa}
                        onChange={(e) => updateForm({[e.target.id]: e.target.value})}
                    />

                    {/* <button type='submit'>Create</button> */}
                    <Btn
                        className="btn-submit"
                        type="submit"
                        btnText="Create"
                    />
                </form>
            </div>

            

        </div>
    );
}

export default CreateCourse;