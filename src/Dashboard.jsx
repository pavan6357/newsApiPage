
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';

const Dashboard = () => {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/json_file/');
                setJsonData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Use a ref to reference the chart container
    const chartRef = useRef(null);

    useEffect(() => {
        // Only create the chart if data is available
        if (jsonData.length > 0) {
            createBarChart();
        }
    }, [jsonData]);

    const createBarChart = () => {
        const data = jsonData.map((item) => item.relevance);

        const svg = d3.select(chartRef.current);

        // Clear previous chart content
        svg.selectAll('*').remove();

        const width = 400;
        const height = 200;

        const xScale = d3.scaleBand()
            .domain(data.map((_, index) => index))
            .range([0, width])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0]);

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (_, index) => xScale(index))
            .attr('y', (d) => yScale(d))
            .attr('width', xScale.bandwidth())
            .attr('height', (d) => height - yScale(d))
            .attr('fill', 'blue');
    };

    return (
        <div>
            <h1>Data Visualization</h1>
            <div ref={chartRef}></div>
        </div>
    );
};

export default Dashboard;
