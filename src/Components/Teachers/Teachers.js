import React from 'react';
import './Teachers.css'

const Teachers = (props) => {
    const { name, id, img, phone, email, department } = props.teacher


    return (

        <div className="teachers">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p><strong>Name: {name}</strong></p>
                <p><strong>Department: {department}</strong></p>
                <p><strong>E-mail: {email}</strong></p>
                <p><strong>Age: </strong></p>
                <p><strong>Phone: {phone}</strong></p>
                <p>{id}</p>
            </div>
        </div>
        // <div className="col-md-4">
        //     <div class="card p-0">
        //         <img src={img} class="card-img-top" alt="..." />
        //         <div class="card-body">
        //             <p class="card-title">Name: {name}</p>
        //             <p class="card-text">Phone: {phone}</p>
        //             <p class="card-text">E-mail: {email}</p>
        //             <a href="#/" class="btn btn-primary px-5">Add</a>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Teachers;