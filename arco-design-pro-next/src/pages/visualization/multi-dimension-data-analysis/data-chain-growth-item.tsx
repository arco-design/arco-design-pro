import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, Line, Interval, Tooltip, Interaction } from 'bizcharts';
import { Card, Spin, Statistic, Typography } from '@arco-design/web-react';
import { IconArrowRise } from '@arco-design/web-react/icon';
import useChartTheme from '@/utils/useChartTheme';
import useLocale from './locale/useLocale';
import styles from './style/data-chain-growth.module.less';

type ChartType = 'line' | 'bar';

interface DataChainGrowthItemProps {
  title: string;
  quota: string;
  chartType: ChartType;
}

export default (props: DataChainGrowthItemProps) => {
  const t = useLocale();
  const chartTheme = useChartTheme();
  const [data, setData] = useState({
    value: 0,
    growth: 0,
    chartData: [],
  });
  const [loading, setLoading] = useState(false);
  const { title, quota, chartType } = props;
  const ChartComponent = chartType === 'line' ? Line : Interval;

  const fetchData = (params) => {
    setLoading(true);
    axios
      .get('/api/dataChainGrowth', { params })
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData({ quota });
  }, [quota]);

  return (
    <Spin loading={loading} style={{ width: '100%' }}>
      <Card>
        <div className={styles.content}>
          <Statistic
            title={title}
            value={data.value}
            groupSeparator
            suffix={
              <Typography.Text type="secondary" className={styles.unit}>
                {t['multiDAnalysis.unit']}
              </Typography.Text>
            }
          />
          <div>
            <Typography.Text type="secondary" className={styles.label}>
              {t['multiDAnalysis.lastMonth']}
            </Typography.Text>
            <Typography.Text type="error">
              {data.growth}
              <IconArrowRise />
            </Typography.Text>
          </div>
        </div>
        <div className={styles.chart}>
          <Chart autoFit data={data.chartData} pure theme={chartTheme}>
            <ChartComponent
              position="x*y"
              color="name"
              adjust={[
                {
                  type: 'dodge',
                  marginRatio: 0,
                },
              ]}
            />
            <Tooltip shared showCrosshairs={chartType === 'line'} />
            <Interaction type="active-region" />
          </Chart>
        </div>
      </Card>
    </Spin>
  );
};
