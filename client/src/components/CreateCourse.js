import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
            <h3>Create New Course Record</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor='code'>Course Code</label>
                <input
                    type="text"
                    className="input-code"
                    id='code'
                    value={form.code}
                    onChange={(e) => updateForm({[e.target.id]: e.target.value})}
                />

                <label htmlFor='credit'>Credit</label>
                <input
                    type="text"
                    className="input-credit"
                    id='credit'
                    value={form.credit}
                    onChange={(e) => updateForm({[e.target.id]: e.target.value})}
                />

                <label htmlFor='gpa'>GPA</label>
                <input
                    type="text"
                    className="input-gpa"
                    id='gpa'
                    value={form.gpa}
                    onChange={(e) => updateForm({[e.target.id]: e.target.value})}
                />

                <button type='submit'>Create</button>
            </form>

            {form.code}
        </div>
    );
}

export default CreateCourse;