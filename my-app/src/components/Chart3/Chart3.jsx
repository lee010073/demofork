import React, { useState, useEffect } from 'react'
import { Pie, Line } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';

const Chart3 = () => {
    const [chartData, setChartData] = useState({})
    const [chartData2, setChartData2] = useState({})
    const [chartData3, setChartData3] = useState({})
    const [chartData4, setChartData4] = useState({})
    const chart = () => {
        setChartData({
            labels: ['Ordered', 'Delivered'],
            datasets: [
                {
                    label: 'Chart1',
                    backgroundColor: ['#b69c90', '#38a1eb'],
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [90, 10]
                }
            ]
        })
        setChartData2({
            labels: ['# of products delivered', 'Arrived airport'],
            datasets: [
                {
                    label: 'Chart2',
                    backgroundColor: ['#fecd56', '#38a1eb',],
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [70, 30]
                }
            ]
        })
        setChartData3({
            labels: ['#of products arrived inbound airport', 'arrive warehouse'],
            datasets: [
                {
                    label: 'Chart3',
                    backgroundColor: ['#fecd56', '#38a1eb',],
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [20, 80]
                }
            ]
        })
        setChartData4({
            labels: ['Customer Order', 'Delivered'],
            datasets: [
                {
                    label: 'Chart4',
                    backgroundColor: ['#ff6182', '#38a1eb',],
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [60, 40]
                }
            ]
        })
    }


    useEffect(() => { chart() }, [])
    return (
        <Container fluid >

            <Row>
                {/* Chart1 */}
                <Col lg={6} md={12}> <Pie data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Purchase order',
                            fontSize: 15
                        },

                        cutoutPercentage: 50,
                        responsive: true,
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    }} />
                </Col>
                {/* Chart2 */}
                <Col lg={6} md={12}><Pie data={chartData2}
                    options={{
                        title: {
                            display: true,
                            text: 'Outbound shipment',
                            fontSize: 15
                        },
                        cutoutPercentage: 50,
                        responsive: true,
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    }} />
                </Col>
                {/* Chart 3 */}
                <Col lg={6} md={12}>
                    <Pie data={chartData3}
                        options={{
                            title: {
                                display: true,
                                text: 'Inbound shipment',
                                fontSize: 15
                            },
                            cutoutPercentage: 50,
                            responsive: true,
                            legend: {
                                display: true,
                                position: 'top'
                            }
                        }} />
                </Col>
                {/* Chart 4 */}
                <Col lg={6} md={12}>
                    <Pie data={chartData4}
                        options={{
                            title: {
                                display: true,
                                text: 'Sales Order',
                                fontSize: 15
                            },
                            cutoutPercentage: 50,
                            responsive: true,
                            legend: {
                                display: true,
                                position: 'top'
                            }
                        }} />
                </Col>
            </Row>


        </Container>
    )
}

export default Chart3;