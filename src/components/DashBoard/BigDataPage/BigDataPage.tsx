import React from "react";
import "./BigDataPage.css";
import {Pie, Bar, Line, Scatter} from 'react-chartjs-2';
import {Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Legend, Tooltip } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Legend, Tooltip);
Chart.overrides.line.spanGaps = false;

const BigData = () => {
    return (
        <div className="graph_container">
            <div className="section">
                <h1>Количество пользователей</h1>
                <Line data={{
                        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '19', '20'],
                        datasets: [{
                            label: 'members',
                            data: [5, 9, 13, 12, 16, 7, 20, 3, 11, 6, 18, 14, 15],
                            pointBackgroundColor: 'black',
                            borderColor: 'white',
                            borderWidth: 2,
                            pointHoverRadius: 5,
                            pointHitRadius: 30,
                            pointBorderColor: 'white',
                        }],
                        
                    }}
                />
            </div>
            <div className="section">
                <h1>Активность пользователей</h1>
                <Line data={{
                        labels: ['1', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                        datasets: [{
                            label: 'membersActivity',
                            data: [6, 11, 9, 15, 2, 18, 14, 19, 1, 13, 8, 10, 17],
                            pointBackgroundColor: 'black',
                            borderColor: 'white',
                            borderWidth: 2,
                            pointHoverRadius: 5,
                            pointHitRadius: 30,
                            pointBorderColor: 'white',
                        }],
                    }}
                />
            </div>
            <div className="section">
                <h1>Активность пользователей в голосых каналах</h1>
                <Line data={{
                        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '4', '15', '16', '17', '18', '19', '20'],
                        datasets: [{
                            label: 'membersVoiceActivity',
                            data: [17, 2, 9, 10, 4, 12, 20, 5, 1, 8, 3, 13, 7, 19, 16],
                            pointBackgroundColor: 'black',
                            borderColor: 'white',
                            borderWidth: 2,
                            pointHoverRadius: 5,
                            pointHitRadius: 30,
                            pointBorderColor: 'white',
                        }],
                    }}
                />
            </div>
            <div className="section">
                <h1>Количество приходящих сообщений</h1>
                <Bar data={{
                        labels: ['1','2','3','4'],
                        datasets: [{
                            label: 'MessageActivity',
                            data: [1,5,4,8],
                            borderColor: 'white',
                            borderWidth: 2,
                            barThickness: 50,
                            borderSkipped: 'start', 
                        }],
                    }}
                />
            </div>
        </div>
    )
}

export default BigData;