import { BarChart } from 'recharts';
import React, { use } from 'react';
import { Bar, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {


    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    // console.log(marksData);

    // data processing

    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            math: studentData.marks.math,
            chemistry: studentData.marks.chemistry
        }
        const avg = (student.chemistry + student.math + student.physics) / 3;

        student.avg = avg;
        return student;
    })



    console.log(marksChartData);

    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="math" fill='red'></Bar>

            </BarChart>
        </div>
    );
};

export default MarksChart;