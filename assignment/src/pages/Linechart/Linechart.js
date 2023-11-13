import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function LineChart({ data }) {
  const chartRef = useRef();

  useEffect(() => {
    // Create the SVG container
    const svg = d3.select(chartRef.current);

    // Set the dimensions of the chart
    const containerWidth = chartRef.current.clientWidth;
    const containerHeight = chartRef.current.clientHeight;
    // Create a scale for x and y axes
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, containerWidth]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([containerHeight, 0]);

    // Create a line generator
    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    // Append the line path to the SVG
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, [data]);

  return <svg ref={chartRef}></svg>;
}

export default LineChart;
