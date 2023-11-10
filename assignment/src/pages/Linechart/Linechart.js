import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function LineChart({ data }) {
  const chartRef = useRef();

  useEffect(() => {
    // Create the SVG container
    const svg = d3.select(chartRef.current);

    // Set the dimensions of the chart
    const width = 300;
    const height = 200;

    // Create a scale for x and y axes
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

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

  return <svg ref={chartRef} width={400} height={400}></svg>;
}

export default LineChart;
