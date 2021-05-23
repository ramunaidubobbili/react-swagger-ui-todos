import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      COLORS: ["#0088FE", "#e5e5e5"]
    };
  }
  render() {
    const styles = {
      rounded7: {
        borderRadius: ".7rem"
      }
    };
    return (
      <Col sm="12" md="4" className="mb-3 mb-sm-0">
        <Card
          className="shadow-sm p-4 h-100 bg-body border-0"
          style={styles.rounded7}
        >
          <CardBody className="p-0 d-flex justify-content-center">
            <ResponsiveContainer width="100%" height={115}>
              <PieChart height={115}>
                <Pie
                  data={this.props.data}
                  cx="50%"
                  cy="50%"
                  outerRadius={58}
                  fill="#8884d8"
                  dataKey="value"
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    index,
                    fill
                  }) => {
                    //console.log("handling label?");
                    const RADIAN = Math.PI / 180;
                    const radius =
                      25 + innerRadius + (outerRadius - innerRadius);
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text
                        x={x}
                        y={y}
                        fill={fill}
                        fontSize={12}
                        dominantBaseline="central"
                      >
                        {this.props.data[index].name}
                      </text>
                    );
                  }}
                >
                  {this.props.data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={this.state.COLORS[index % this.state.COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Chart;
