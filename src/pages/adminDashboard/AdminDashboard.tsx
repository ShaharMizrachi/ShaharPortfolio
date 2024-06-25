import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const AdminDashboard = () => {

    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];

    return (
        <div>
            <LineChart
                width={500}
                height={300}
                series={[
                    {
                        data: pData,
                        label: 'pv',
                        color: '#73cdc2', // Custom color for the pv series
                    },
                    {
                        data: uData,
                        label: 'uv',
                        color: '#ff7f50', // Custom color for the uv series
                    },
                ]}
                xAxis={[
                    {
                        scaleType: 'point',
                        data: xLabels,
                        axisLineColor: '#ffffff', // Axis line color
                        tickLabelColor: '#ffffff', // Tick label color
                    }
                ]}
                yAxis={{
                    axisLineColor: '#ffffff', // Axis line color
                    tickLabelColor: '#ffffff', // Tick label color
                }}
                chartTitle={{
                    text: 'User Data Over Time',
                    style: { fill: '#ffffff' } // Title color
                }}
                gridLineColor="#444" // Grid line color
            />
        </div>
    );
}

export default AdminDashboard;
