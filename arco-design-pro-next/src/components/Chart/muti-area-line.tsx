import React from 'react';
import { Chart, Line, Axis, Legend, Area } from 'bizcharts';
import { Spin } from '@arco-design/web-react';
import styles from './style/index.module.less';

const areaColorMap = [
  'l (180) 0:rgba(100, 162, 255, 0.12) 1:rgba(52, 105, 255, 0.001)',
  'l (180) 0:rgba(100, 255, 236, 0.12) 1:rgba(52, 255, 243, 0.001)',
  'l (180) 0:rgba(255, 211, 100, 0.12) 1:rgba(255, 235, 52, 0.001)',
  'l (180) 0:rgba(131, 100, 255, 0.12) 1:rgba(80, 52, 255, 0.001)',
];

const lineColorMap = ['#165DFF', '#33D1C9', '#F77234', '#722ED1'];

function MutiAreaLine({ data, loading }: { data: any[]; loading: boolean }) {
  return (
    <Spin loading={loading} style={{ width: '100%' }}>
      <Chart
        height={370}
        padding="auto"
        data={data}
        autoFit
        scale={{ time: 'time' }}
        className={styles['chart-wrapper']}
      >
        <Line
          shape="smooth"
          position="time*count"
          color={['name', lineColorMap]}
        />
        <Area
          position="time*count"
          shape="smooth"
          color={['name', areaColorMap]}
        />
        <Axis
          name="count"
          label={{ formatter: (value) => `${Number(value) / 100} k` }}
        />
        <Legend visible={false} />
      </Chart>
    </Spin>
  );
}

export default MutiAreaLine;
