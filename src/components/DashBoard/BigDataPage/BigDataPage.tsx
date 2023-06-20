import React from "react";
import "./BigDataPage.css";
import {Line} from 'react-chartjs-2';

const BigData = () => {
    return (
        <div>
            <Line data={
                {
                    labels: ['1','2'],
                    datasets: [{
                        label: 'r',
                        data: [1,3]
                    }],
                }
            }/>
        </div>
    )
}

export default BigData;