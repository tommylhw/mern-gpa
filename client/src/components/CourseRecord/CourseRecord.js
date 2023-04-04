import React from 'react';
import '../CourseRecord/CourseRecord.css';
import { Link } from 'react-router-dom';

const CourseRecord = (props) => {
  return (
      
      <tr>
        <td>{props.record.code}</td>
        <td>{props.record.credit}</td>
        <td>{props.record.gpa}</td>
        <td className='td-action'>
          <Link className='link'>Edit</Link>
          <p> | </p>
          <Link className='link'>Delete</Link>
        </td>
      </tr>
    
  )
} 

export default CourseRecord;