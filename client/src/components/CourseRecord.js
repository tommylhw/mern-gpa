import React from 'react';

const CourseRecord = (props) => {
  return (
    <tr>
      <td>{props.record.code}</td>
      <td>{props.record.credit}</td>
      <td>{props.record.gpa}</td>
    </tr>
  )
} 
 
export default CourseRecord;