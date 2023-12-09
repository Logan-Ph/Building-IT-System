import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import 'chart.js/auto' //khong duoc xoa


ChartJS.register(ArcElement, Tooltip, Legend);


export default function AdminBarChart() {
  
  return (
    <div>
        
      <Line
      
        data={{
            
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "First Year",
              data: [33, 53, 85, 41, 44, 65,12,42,112, 10, 14, 20],
              fill: true,
              backgroundColor: "transparent",
              borderColor: "black"
            },
            {
              label: "Second Year",
              data: [33, 25, 35, 51, 54, 76, 85, 41, 44, 65, 35, 51],
              fill: false,
              borderColor: "#742774"
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          
        }}
      />
    </div>
  )
}

