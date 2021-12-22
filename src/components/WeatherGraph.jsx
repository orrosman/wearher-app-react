import React from 'react';
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
import { Chart, Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Graph = ({ weatherData }) => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
		},
		interaction: {
			mode: 'index',
		},
	};

	const labels = weatherData.hourly.time.map((timestamp) =>
		timestamp.replace('T', ' ')
	);

	const units = { ...weatherData.hourly_units };

	const data = {
		labels,
		datasets: [
			{
				label: `Humidity (${units['relativehumidity_2m']})`,
				data: [...weatherData.hourly['relativehumidity_2m']],
				borderColor: 'rgb(70, 99, 132)',
				backgroundColor: 'rgba(70, 99, 132, 0.5)',
			},
			{
				label: `Temperature (${units['temperature_2m']})`,
				data: [...weatherData.hourly['temperature_2m']],
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: `Apparent Temperature (${units['apparent_temperature']})`,
				data: [...weatherData.hourly['apparent_temperature']],
				borderColor: 'rgb(70, 150, 80)',
				backgroundColor: 'rgba(70, 150, 80, 0.5)',
			},
		],
	};
	return <Line options={options} data={data} />;
};
export default Graph;
