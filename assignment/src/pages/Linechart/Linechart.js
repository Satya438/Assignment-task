import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function LineChart({ data }) {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current);

    // Set dimensions based on the container size
    const containerWidth = chartRef.current.clientWidth;
    const containerHeight = chartRef.current.clientHeight;

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    // Create a line generator
    const line = d3
      .line()
      .x((_, i) => (i * width) / (data.length - 1))
      .y((d) => (1 - d / d3.max(data)) * height)
      .curve(d3.curveCatmullRom.alpha(0.5));

    // Clear previous chart
    svg.selectAll("*").remove();

    // Append a group element for margins
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Append the line path to the SVG
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#60BB6E")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Add x-axis
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const xAxis = d3.axisBottom(xScale).ticks(data.length);

    g.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);
  }, [data]);

  return <svg ref={chartRef}></svg>;
}

export default LineChart;
