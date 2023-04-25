import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../ShowCourseList/ShowCourseList.css';
import AddBtn from '../../components/Button/Button';

import CourseRecord from '../../components/CourseRecord/CourseRecord';
import e from 'cors';

const ShowCourseList = () => {

    const [records, setRecords] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8082/api/courses')
            .then((res) => {
                setRecords(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id) => {
        console.log(id);

        axios
            .delete(`http://localhost:8082/api/courses/${id}`)
            .then(res => {
                axios
                    .get('http://localhost:8082/api/courses')
                    .then((res) => {
                        setRecords(res.data);
                    })
                    .catch((err) => console.log(err));


                navigate('/');
            })
            .catch(err => console.log(err));
        
        
    }

    return (
        <div className='body'>
            <div className='header-container'>
                <h3>Course Records</h3>
                <Link to='/create-course'>
                    <AddBtn 
                        btnText="Add"
                    />
                </Link>
                
            </div>
            

            <hr />
            <table border={0} cellSpacing={0}>
                <tr>
                    <th>Coruse Code</th>
                    <th>Credit Earned</th>
                    <th>GPA</th>
                    <th></th>
                </tr>

                {records.map(data => {
                    return (
                        <CourseRecord
                            record={data}
                            handleDelete={() => handleDelete(data._id)}
                        />
                    )
                })}
            </table>

        </div>
    );
}
 
export default ShowCourseList;