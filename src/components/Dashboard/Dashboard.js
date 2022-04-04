import React from 'react';
import './Dashboard.css'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='Charts'>
            <div className='Chart'>
                <h5>MONTH WISH SELL</h5>
                <LineChart width={500} height={250} data={data}>
                    <Line type="monotone" dataKey={'sell'} stroke="#7F00FF"></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip />
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div className='Chart'>
                <h5>Invesment VS Revenue</h5>
                <AreaChart width={500} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#66FFFF" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#66FFFF" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#7F00FF" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#7F00FF" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#7F00FF" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="investment" stroke="#B266FF" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
            <div className='Chart'>
            <h5>Invesment VS Revenue</h5>
                <BarChart width={500} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className='Chart'>
            <h5>Invesment VS Revenue</h5>
                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default MyLineChart;