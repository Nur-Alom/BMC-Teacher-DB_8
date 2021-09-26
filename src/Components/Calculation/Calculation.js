import React from 'react';
import './Calculation.css'

const Calculation = (props) => {
    // console.log(props.teachers)
    const teachers = props.teachers;
    let total = 0;
    for (const teacher of teachers) {
        // console.log(teacher)
        const { salary, name } = teacher
        // const salary = parseFloat(teacher.salary)
        total = total + salary;
    }
    return (
        <div className="count sticky-top">
            <h3>Total Selected: {props.teachers.length}</h3>
            <p><i className="fas fa-user-tie"></i> Name: { }</p>
            <p>Total Cost: {total}</p>
        </div>
    );
};

export default Calculation;