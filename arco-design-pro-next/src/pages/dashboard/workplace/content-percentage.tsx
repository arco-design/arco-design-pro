import React, { useState, useEffect } from 'react';
import { Card, Spin } from '@arco-design/web-react';
import { DonutChart } from 'bizcharts';
import axios from 'axios';
import useLocale from './locale/useLocale';

function PopularContent() {
  const t = useLocale();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    axios
      .get('/api/workplace/content-percentage')
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cols = {
    percent: {
      formatter: (val) => {
        val = val * 100 + '%';
        return val;
      },
    },
  };

  console.log(data);

  return (
    <Card
      title={t['workplace.contentPercentage']}
      bordered={false}
      headerStyle={{ borderBottom: 0 }}
    >
      <Spin loading={loading} style={{ display: 'block' }}>
        <DonutChart
          autoFit
          height={340}
          data={data}
          radius={0.7}
          innerRadius={0.65}
          angleField="count"
          colorField="type"
          label={{
            visible: true,
            type: 'spider',
            formatter: (v) =>
              `${v.type}: ${(v.percent * 100).toFixed(0)}%\n${v.count}`,
          }}
          legend={{
            position: 'bottom',
          }}
          statistic={{
            title: {
              style: {
                fontSize: '14px',
                lineHeight: 2,
              },
              formatter: () => '内容量',
            },
            content: {
              style: { fontSize: '16px' },
            },
          }}
        />
      </Spin>
    </Card>
  );
}

export default PopularContent;
