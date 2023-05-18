import React from 'react'
import CardContainer from '../Cards/CardContainer'
import {faker} from '@faker-js/faker'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const LineChart = () => {
    const options = {
        responsive: true,
    }
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const data = {
        labels,
        datasets: [
          {
            label: 'Patient',
            data: labels.map(() => faker.number.int({ min: 0, max: 2500 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
    return (
        <div className="bg-white p-5">
            <div className="">
                <h1>Consultations</h1>
            </div>
            <Line options={options} data={data}/>
        </div>
    )
}

export default LineChart