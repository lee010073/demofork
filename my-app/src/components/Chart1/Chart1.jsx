import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2';


const Chart1 = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            datasets: [{
                label: 'Days of inventory',
                yAxisID: 'Line Dataset',
                data: [50, 40, 53, 56, 53, 29, 25, 40, 20, 15,],
                type: 'line',
                borderColor: "#f08b3c",
                fill: false,
                lineTension: 0,
                order: 0
            }, {
                label: 'Inventory',
                yAxisID: 'Bar Dataset',
                data: [150, 50, 300, 220, 50, 25, 30, 50, 20, 50],
                borderWidth: 3,
                barThickness: 25,
                backgroundColor: "#0296fd",
                borderColor: "#43b5c8",
                barThickness: "flex",
                order: 1
            }],
            labels:
                ['Product 1', 'Product 2', 'Product 3',
                    'Product 4', "Product 5", 'Product 6'
                    , 'Product 7', 'Product 8', 'Product 9', 'Product 10']

        })
    }
    useEffect(() => { chart() }, [])
    return (
        <div>
            <div>
                <Bar data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: "Chart 1",
                            fontSize: 30
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
                        scales: {
                            yAxes: [
                                {
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Inventory',
                                    },
                                    id: "Bar Dataset",
                                    type: 'linear',
                                    position: "left",
                                    ticks: {
                                        max: 350,
                                        autoSkip: true,
                                        //maxTicksLimit: 10,
                                        beginAtZero: true
                                    }

                                }, {
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Days of inventory'

                                    },
                                    id: "Line Dataset",
                                    type: 'linear',
                                    position: 'right',
                                    ticks: {
                                        max: 70,
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    }
                                }
                            ]
                        }
                    }} />
            </div>
        </div>
    )
}

export default Chart1;