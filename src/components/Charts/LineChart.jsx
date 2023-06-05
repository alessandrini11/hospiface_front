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
        x: {
          ticks: {
              font: {
                  family: 'Poppins',
              },
          },
      },
      y: {
          ticks: {
              font: {
                  family: 'Poppins',
              },
          },
      },
    }
    const color = "rgb(255, 99, 132)"
    const labels = entity.labels
    const data = {
        labels,
        datasets: [
          {
            label: 'C',
            data: entity.datas,
            borderColor: color,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: true,
            lineTension: 0.5,
            borderColor: color,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: color,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: color,
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },
        ],
      };
      
    return (
        <div className="bg-white p-5">
            <div className="d-flex justify-content-between">
                <p className="text-uppercase fw-medium text-muted text-truncate mb-0">{entity.name}</p>
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