import React from "react";
import "./BigDataPage.css";
import {Line} from 'react-chartjs-2';

const BigData = () => {
    return (
        <div>
            <Line 
                data={{
                    labels: ["слово19", "слово20"],
                    datasets: [{
                        label: 'red',
                        data: [14, 7]
                    }]}
                }
            />
        </div>
    )
}

export default BigData;