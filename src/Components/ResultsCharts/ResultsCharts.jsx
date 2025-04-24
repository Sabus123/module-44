import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultData = [
    { "id": 1, "name": "Alice", "physics": 85, "chemistry": 78, "math": 92 },
    { "id": 2, "name": "Bob", "physics": 74, "chemistry": 81, "math": 88 },
    { "id": 3, "name": "Charlie", "physics": 90, "chemistry": 85, "math": 95 },
    { "id": 4, "name": "David", "physics": 65, "chemistry": 70, "math": 60 },
    { "id": 5, "name": "Eve", "physics": 88, "chemistry": 91, "math": 89 },
    { "id": 6, "name": "Frank", "physics": 76, "chemistry": 73, "math": 80 },
    { "id": 7, "name": "Grace", "physics": 82, "chemistry": 87, "math": 90 },
    { "id": 8, "name": "Heidi", "physics": 68, "chemistry": 74, "math": 72 },
    { "id": 9, "name": "Ivan", "physics": 95, "chemistry": 89, "math": 94 },
    { "id": 10, "name": "Judy", "physics": 79, "chemistry": 84, "math": 85 }
  ]
  

const ResultsCharts = () => {
    return (
        <div>
            <LineChart width={800}  height={500} data={ResultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line stroke='green' dataKey={'math'}></Line>
                <Line stroke="red" dataKey={'chemistry'}></Line>
            </LineChart>
        </div>
    );
};

export default ResultsCharts;