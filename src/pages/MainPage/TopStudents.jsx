import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StudentCard from '../Students/StudentCard';

function TopStudents() {
    const [studentState, setStudentState] = useState([]);
    const [randStudents, setRandStudents] = useState([]);

    useEffect(() => {
        axios.get('https://phplaravel-944849-3287799.cloudwaysapps.com/api/v1/high-sch-accepted-students?page=1')
            .then(resp => {
                setStudentState(resp.data);
                // console.log(resp.data);
            });
    }, []);

    useEffect(() => {
        if (studentState.length > 0) {
            const randomStudents = [];
            while (randomStudents.length < 8) { // Выбираем 4 уникальных студентов
                const randomIndex = Math.floor(Math.random() * studentState.length);
                const randomStudent = studentState[randomIndex];
                if (!randomStudents.includes(randomStudent)) {
                    randomStudents.push(randomStudent);
                    // console.log(randomIndex);

                }
            }
            setRandStudents(randomStudents);
        }
    }, [studentState]);

    return (
        <div className="container stud">
                    <div className="sec-title mb-50 text-center">
                <h2>Məzunlarımız</h2>     
            </div>
            <div className="student-container">
                
            {
                randStudents.map((data,i)=>(
                    <StudentCard key={i} data={data} />
                ))
            }
            </div>
     
        </div>
    );
}

export default TopStudents;
