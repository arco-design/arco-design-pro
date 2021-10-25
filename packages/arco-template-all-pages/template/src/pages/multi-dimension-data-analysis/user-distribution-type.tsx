// 用户分布/用户分类占比
import React, { useState } from 'react';
import { Chart, Coordinate, Interval, Axis } from 'bizcharts';
import { Card, Typography } from '@arco-design/web-react';

import useChartTheme from '../../utils/useChartTheme';
import useLocale from '../../utils/useLocale';

export default () => {
  const locale = useLocale();
  const chartTheme = useChartTheme();
  const [data] = useState([
    {
      value: 64,
      name: '开发者',
    },
    {
      value: 33,
      name: '设计师',
    },
    {
      value: 5,
      name: '其他',
    },
  ]);

  return (
    <Card bordered={false}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }} heading={6}>
        {locale['multiDAnalysis.card.title.userDistributionType']}
      </Typography.Title>
      <Chart height={263} autoFit data={data} theme={chartTheme}>
        <Coordinate type="theta" radius={0.8} innerRadius={0.5} />
        <Interval
          adjust="stack"
          position="value"
          color="name"
          tooltip={false}
          label={[
            'value',
            {
              content: (item) => `${item.value}%`,
              position: 'middle',
              offset: '-25%',
              labelLine: false,
            },
          ]}
        />
        <Axis visible={false} />
      </Chart>
    </Card>
  );
};
