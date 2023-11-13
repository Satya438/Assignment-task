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
      .y((d) => (1 - d / d3.max(data)) * height);

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
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, [data]);

  return <svg ref={chartRef}></svg>;
}

export default LineChart;
