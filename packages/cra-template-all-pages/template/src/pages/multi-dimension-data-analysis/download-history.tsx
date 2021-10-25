// 历史下载量
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import { omit } from 'lodash';
import { Chart, Line, Legend, Point, Tooltip, Axis } from 'bizcharts';
import { Checkbox, DatePicker, Typography, Grid, Spin, Form, Card } from '@arco-design/web-react';

import useChartTheme from '../../utils/useChartTheme';
import useLocale from '../../utils/useLocale';

const DATE_FORMAT = 'YYYY-MM-DD';

export default () => {
  const locale = useLocale();
  const chartTheme = useChartTheme();
  const [searchParams, setSearchParams] = useState({
    time: [dayjs().subtract(1, 'day').format(DATE_FORMAT), dayjs().format(DATE_FORMAT)],
    showCompetitor: false,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = (params: { time: string[]; showCompetitor: boolean }) => {
    const time = params || [];
    setLoading(true);
    axios
      .get('/api/downloadHistory', {
        params: {
          ...omit(params, 'time'),
          startTime: time[0],
          endTime: time[1],
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFormChange = (_value, values) => {
    setSearchParams(values);
  };

  useEffect(() => {
    fetchData(searchParams);
  }, [searchParams]);

  return (
    <Spin loading={loading} style={{ width: '100%' }}>
      <Card bordered={false}>
        <Typography.Title style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }} heading={6}>
          {locale['multiDAnalysis.card.title.downloadHistory']}
        </Typography.Title>
        <Form onChange={onFormChange} initialValues={searchParams}>
          <Grid.Row justify="space-between" style={{ width: '100%' }}>
            <Grid.Col span={12}>
              <Form.Item noStyle field="time">
                <DatePicker.RangePicker />
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={12} style={{ textAlign: 'right' }}>
              <Form.Item noStyle field="showCompetitor" triggerPropName="checked">
                <Checkbox>{locale['multiDAnalysis.showCompetitor']}</Checkbox>
              </Form.Item>
            </Grid.Col>
          </Grid.Row>
        </Form>
        <Chart autoFit height={228} data={data} theme={chartTheme} style={{ paddingTop: 20 }}>
          <Line position="x*y" color="name" />
          <Axis name="x" />
          <Axis name="y" label={{ formatter: (val) => `${+val / 1000}K` }} />
          <Point position="x*y" shape="circle" color="name" />
          <Tooltip shared showCrosshairs />
          <Legend />
        </Chart>
      </Card>
    </Spin>
  );
};
