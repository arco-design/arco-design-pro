import React from 'react';
import { Chart, Line, Axis, Tooltip, Legend, Slider } from 'bizcharts';
import { Spin } from '@arco-design/web-react';
import styles from '../style/chart.module.less';
import CustomTooltip from './customer-tooltip';

function PeriodLine({ data, loading }: { data: any[]; loading: boolean }) {
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
          position="time*rate"
          color={['name', ['#21CCFF', '#313CA9', '#249EFF']]}
        />
        <Tooltip crosshairs={{ type: 'x' }} showCrosshairs shared>
          {(title, items) => {
            return <CustomTooltip title={title} data={items} />;
          }}
        </Tooltip>
        <Axis
          name="rate"
          label={{
            formatter(text) {
              return `${Number(text)} %`;
            },
          }}
        />
        <Legend name="name" />
        <Slider />
      </Chart>
    </Spin>
  );
}

export default PeriodLine;
