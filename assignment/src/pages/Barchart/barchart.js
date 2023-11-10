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
    const margin = { top: 20, right: 490, bottom: 60, left: 0 };
    const width = 980 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
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
      .selectAll("ellipse")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", "green");

    // Create circles (data points)
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      // .attr("cx", (d) => xScale(d.label) + xScale.bandwidth() / 2)
      // .attr("cy", (d) => yScale(d.value))
      // .attr("r", 15)
      .attr("fill", "green"); // You can change this to the desired color

    // Add x-axis with labels
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
  }, []);

  return <svg ref={svgRef}></svg>;
}

export default BarChart;
