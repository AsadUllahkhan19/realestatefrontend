import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "../../App.css";
function Piechart({ width, height, labels, series }) {
  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <Chart
          type="donut"
          width={width}
          height={height}
          className="chartt flex items-center"
          series={series}
          options={{
            noData: { text: "Empty Data" },
            colors: ["#f797a9", "#7cf79d", "#f7f4a1", "#abf0ff"],
            labels: labels,
            dataLabels: {
              enabled: false,
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default Piechart;
