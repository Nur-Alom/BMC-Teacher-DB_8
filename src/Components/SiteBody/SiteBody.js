import React, { useEffect, useState } from 'react';
import './SiteBody.css';
import Calculation from '../Calculation/Calculation';
import Teachers from '../Teachers/Teachers';

const SiteBody = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [])
    console.log(teachers);

    return (
        <div className="body-main">
            <div className="teachers-body">
                {
                    teachers.map(teacher => <Teachers
                        key={teacher.id}
                        teacher={teacher}
                    />)
                }
            </div>
            <div className="calculation-body">
                <Calculation />
            </div>
        </div>
    );
};

export default SiteBody;
