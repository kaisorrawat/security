import Chart from "react-apexcharts";
import { Card, CardHeader, CardContent } from "@material-ui/core";

const series = [
  {
    name: "อาคาร 1",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "อาคาร 2",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
];

const options = {
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["15:15:04", "15:00:03", "14:45:04", "14:45:04", "14:30:03", "14:15:04", "14:00:03", "13:45:03", "13:30:40"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

const AppEnergyConsumption = () => {
  return (
    <Card variant="outlined">
      <CardHeader title="Energy Consumption (kWh)" />
      <CardContent>
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            // width="950"
            height={390}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AppEnergyConsumption;
