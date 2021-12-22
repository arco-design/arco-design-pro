import React from 'react';
import { Statistic, Typography } from '@arco-design/web-react';
import cs from 'classnames';
import {
  Chart,
  Line,
  Interval,
  Coordinate,
  Interaction,
  Tooltip,
  registerShape,
} from 'bizcharts';

import { IconArrowRise, IconArrowFall } from '@arco-design/web-react/icon';
import styles from '../style/public-opinion.module.less';

const { Title, Text } = Typography;
const basicChartProps = {
  pure: true,
  autoFit: true,
  height: 80,
  padding: [0, 10, 0, 10],
};

export interface PublicOpinionCardProps {
  key: string;
  title: string;
  chartData: any[];
  chartType: 'line' | 'interval' | 'pie';
  count: number;
  increment: boolean;
  diff: number;
  compareTime: string;
}

function SimpleLine(props: { chartData: any[] }) {
  const { chartData } = props;
  return (
    <Chart data={chartData} {...basicChartProps}>
      <Line
        position="x*y"
        shape={['name', ['smooth', 'dash']]}
        color={['name', ['#165DFF', 'rgba(106,161,255,0.3)']]}
      />
    </Chart>
  );
}

function SimpleInterval(props: { chartData: any[] }) {
  const { chartData } = props;

  registerShape('interval', 'border-radius', {
    draw(cfg, container) {
      const points = cfg.points as unknown as { x: string; y: number };
      let path = [];
      path.push(['M', points[0].x, points[0].y]);
      path.push(['L', points[1].x, points[1].y]);
      path.push(['L', points[2].x, points[2].y]);
      path.push(['L', points[3].x, points[3].y]);
      path.push('Z');
      path = this.parsePath(path); // 将 0 - 1 转化为画布坐标

      const group = container.addGroup();
      group.addShape('rect', {
        attrs: {
          x: path[1][1], // 矩形起始点为左上角
          y: path[1][2],
          width: path[2][1] - path[1][1],
          height: path[0][2] - path[1][2],
          fill: cfg.color,
          radius: (path[2][1] - path[1][1]) / 2,
        },
      });
      return group;
    },
  });

  return (
    <Chart data={chartData} {...basicChartProps}>
      <Interval
        position="x*y"
        color={[
          'x',
          (xVal) => {
            if (Number(xVal) % 2 === 0) {
              return '#2CAB40';
            }
            return '#86DF6C';
          },
        ]}
        shape="border-radius"
      />
    </Chart>
  );
}

function SimplePie(props: { chartData: any[] }) {
  const { chartData } = props;

  return (
    <Chart data={chartData} {...basicChartProps} padding={[0, 0, 0, 0]}>
      <Coordinate type="theta" radius={0.8} innerRadius={0.7} />
      <Interval
        adjust="stack"
        position="count"
        shape="sliceShape"
        color={['name', ['#8D4EDA', '#00B2FF', '#165DFF']]}
        label="name"
      />
      <Tooltip visible={true} />
      <Interaction type="element-single-selected" />
    </Chart>
  );
}

function PublicOpinionCard(props: PublicOpinionCardProps) {
  const { chartType, title, count, increment, diff, chartData } = props;
  const className = cs(styles.card, styles[`card-${chartType}`]);

  return (
    <div className={className}>
      <div className={styles.statistic}>
        <Statistic
          title={
            <Title heading={6} className={styles.title}>
              {title}
            </Title>
          }
          value={count}
          groupSeparator
        />
        <div className={styles['compare-yesterday']}>
          <Text type="secondary" className={styles['compare-yesterday-text']}>
            {props.compareTime}
          </Text>
          <span
            className={cs(styles['diff'], {
              [styles['diff-increment']]: increment,
            })}
          >
            {diff}
            {increment ? <IconArrowRise /> : <IconArrowFall />}
          </span>
        </div>
      </div>
      <div className={styles.chart}>
        {chartType === 'interval' && <SimpleInterval chartData={chartData} />}
        {chartType === 'line' && <SimpleLine chartData={chartData} />}
        {chartType === 'pie' && <SimplePie chartData={chartData} />}
      </div>
    </div>
  );
}

export default PublicOpinionCard;
