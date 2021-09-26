import React, { useEffect, useState } from 'react';
import './SiteBody.css';
import Teachers from '../Teachers/Teachers';
import Calculation from '../Calculation/Calculation'

const SiteBody = () => {
    const [teachers, setTeachers] = useState([]);
    const [teacherCount, setTeacherCount] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setTeachers(data)
            );
    }, [])

    const handleCart = (teacher) => {
        console.log(teacher)
        const newAdd = [...teacherCount, teacher];
        setTeacherCount(newAdd);
    }

    return (
        <div className="body-main">
            <div className="teachers-body">
                {
                    teachers.map(teacher => <Teachers
                        key={teacher.id}
                        teacher={teacher}
                        handleCart={handleCart}
                    />)
                }
            </div>
            <div className="calculation-body">
                <Calculation teachers={teacherCount} />
            </div>
        </div>
    );
};

export default SiteBody;
