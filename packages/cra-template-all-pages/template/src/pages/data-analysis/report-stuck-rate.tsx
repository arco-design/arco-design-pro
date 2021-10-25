import React, { useEffect, useState } from 'react';
import { Spin } from '@arco-design/web-react';
import { Chart, Line, Legend, Point, Tooltip, Axis } from 'bizcharts';
import axios from 'axios';
import useChartTheme from '../../utils/useChartTheme';

function ReportStuckRate() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const chartTheme = useChartTheme();

  const fetchData = (params = {}) => {
    setLoading(true);
    axios
      .get('/api/reportStuckRate', { params })
      .then((res) => {
        setData(res.data || {});
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Spin loading={loading} style={{ width: '100%' }}>
      <Chart autoFit height={229} data={data} theme={chartTheme}>
        <Line position="x*y" color="name" />
        <Axis name="x" />
        <Axis name="y" label={{ formatter: (val) => `${val}%` }} />
        <Point position="x*y" shape="circle" color="name" />
        <Tooltip shared showCrosshairs />
        <Legend />
      </Chart>
    </Spin>
  );
}

export default ReportStuckRate;
