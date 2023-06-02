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

const LineChart = ({entity, name, onChange}) => {
    const options = {
        responsive: true,
    }
    const labels = entity.labels
    const data = {
        labels,
        datasets: [
          {
            label: 'C',
            data: entity.datas,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
    return (
        <div className="bg-white p-5">
            <div className="flex justify-between">
                <h1>{entity.name}</h1>
                <form action="">
                  <select onChange={(e) => onChange(name, e.target.value)} name="" id="">
                    <option value="none">None</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </select>
                </form>
            </div>
            <Line options={options} data={data}/>
        </div>
    )
}

export default LineChart