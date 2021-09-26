import React from 'react';
import './Calculation.css'

const Calculation = (props) => {
    console.log(props.teachers)
    const { teachers } = props;
    const name = props.teachers.name
    let total = 0;
    for (const teacher of teachers) {
        const salary = parseFloat(teacher.salary)
        total = total + salary;
    }

    return (
        <div className="count">
            <h3>Total Selected: {props.teachers.length}</h3>
            <p><i className="fas fa-user-tie"></i> Name: {name}</p>
            <p>Total Cost: {total}</p>
        </div>
    );
};

export default Calculation;