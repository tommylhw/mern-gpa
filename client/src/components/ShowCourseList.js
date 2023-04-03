import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import CourseRecord from './CourseRecord';

const ShowCourseList = () => {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8082/api/courses')
            .then((res) => {
                setRecords(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h3>Course Records</h3>

            {records.map(data => {
                return (
                    <CourseRecord
                        record={data}
                    />
                )
            })}
            
        </div>
    );
}

export default ShowCourseList;