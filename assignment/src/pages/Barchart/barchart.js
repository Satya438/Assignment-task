import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function BarChart() {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { label: "Offer", value: 40 },
      { label: " ", value: 0 },
      { label: " ", value: 0 },
      { label: 25, value: 45 },
      { label: " ", value: 0 },
      { label: " ", value: 0 },
      { label: " ", value: 0 },
      { label: " ", value: 0 },
      { label: " ", value: 0 },
      { label: " ", value: 0 },
      { label: 40, value: 60 },
      { label: " ", value: 0 },
      { label: " ", value: 0 },
      { label: " ", value: 0 },
      { label: 60, value: 60 },
      { label: " ", value: 0 },
      { label: " ", value: 0 },
      { label: 75, value: 60 },
    ];

    // Set dimensions based on the container size
    const containerWidth = svgRef.current.clientWidth;
    const containerHeight = 230; // Set a fixed height or adjust dynamically

    const margin = { top: 20, right: 20, bottom: 60, left: 0 };
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", containerWidth)
      .attr("height", containerHeight)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.6);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    // Create bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", "green");

    // Add x-axis with labels
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
  }, []);

  return <svg ref={svgRef}></svg>;
}

export default BarChart;
