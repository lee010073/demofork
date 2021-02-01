import React, { useState, useEffect } from 'react'
import { HorizontalBar } from 'react-chartjs-2';

const Chart2 = () => {
    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData({
            datasets: [{
                label: 'Day(s)',
                data: [0.03, 0.8, 0.5, 0.3, 0.4, 0.7, 14],
                borderWidth: 4,
                barThickness: 25,
                backgroundColor: "#fe7985",
                borderColor: "#43b5c8",
                barThickness: "flex",

            }],
            labels:
                ['Arrive customer address to Goods Receipt',
                    'Pick to Arrive Customer address',
                    'Customer order to pick',
                    'Arrive Inbound Airport to warehouse',
                    "Arrive Outbound Airport to Arrive Inbound",
                    'Exit factory to Arrive Outbound Airport',
                    'Confirmation to Exit Factory']
        })
    }
    useEffect(() => { chart() }, [])
    return (
        <div>
            <HorizontalBar data={chartData}
                options={{
                    title: {
                        display: true,
                        text: "Chart 2",
                        fontSize: 30
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                max: 15,
                                maxTicksLimit: 5
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    responsive: true,
                    legend: {
                        display: true,
                        position: "bottom",
                        labels: {
                            fontColor: '#222826',
                            fontSize: 20,
                        }
                    },



                }} />
        </div>
    )
}

export default Chart2;