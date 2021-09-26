import React from 'react';
import './Calculation.css'

const Calculation = (props) => {
    const teachers = props.teachers;
    let total = 0;
    for (const teacher of teachers) {
        const salary = parseFloat(teacher.salary)
        total = total + salary;
    }
    return (
        <div className="count sticky-top">
            <h3>Total Selected: {props.teachers.length}</h3>
            <p>Total Cost: {total}</p>
        </div>
    );
};

export default Calculation;