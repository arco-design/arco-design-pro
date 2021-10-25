// 产品评价
import React, { useState } from 'react';
import { Chart, Coordinate, Line, Area, Axis } from 'bizcharts';
import { Card, Typography } from '@arco-design/web-react';

import useChartTheme from '../../utils/useChartTheme';
import useLocale from '../../utils/useLocale';

export default () => {
  const locale = useLocale();
  const chartTheme = useChartTheme();
  const [data] = useState([
    {
      key: locale['multiDAnalysis.productEvaluation.component'],
      value: 5,
    },
    {
      key: locale['multiDAnalysis.productEvaluation.docs'],
      value: 4,
    },
    {
      key: locale['multiDAnalysis.productEvaluation.feedback'],
      value: 5,
    },
    {
      key: locale['multiDAnalysis.productEvaluation.design'],
      value: 5,
    },
    {
      key: locale['multiDAnalysis.productEvaluation.community'],
      value: 4,
    },
    {
      key: locale['multiDAnalysis.productEvaluation.ecology'],
      value: 4,
    },
  ]);

  return (
    <Card bordered={false}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }} heading={6}>
        {locale['multiDAnalysis.card.title.productEvaluation']}
      </Typography.Title>
      <Chart
        autoFit
        pure
        height={263}
        data={data}
        theme={chartTheme}
        scale={{
          value: {
            min: 0,
            max: 5,
          },
        }}
      >
        <Coordinate type="polar" radius={0.8} />
        <Line position="key*value" size={2} />
        <Area position="key*value" size={2} />
        <Axis name="key" tickLine={false} />
        <Axis name="value" grid={false} tickLine={false} label={false} />
      </Chart>
    </Card>
  );
};
