import React, { useState, useEffect, ReactNode } from 'react';
import {
  Grid,
  Typography,
  Divider,
  Skeleton,
  Spin,
  Link,
} from '@arco-design/web-react';
import { IconCaretUp } from '@arco-design/web-react/icon';
import { Chart, Area, Axis, Line, Tooltip } from 'bizcharts';
import axios from 'axios';
import useLocale from './locale/useLocale';
import styles from './style/overview.module.less';
import IconCalendar from './assets/calendar.svg';
import IconComments from './assets/comments.svg';
import IconContent from './assets/content.svg';
import IconIncrease from './assets/increase.svg';

const { Row, Col } = Grid;

type StatisticItemType = {
  icon?: ReactNode;
  title?: ReactNode;
  count?: ReactNode;
  loading?: boolean;
  unit?: ReactNode;
};

function StatisticItem(props: StatisticItemType) {
  const { icon, title, count, loading, unit } = props;
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <Skeleton loading={loading} text={{ rows: 2, width: 60 }} animation>
          <div className={styles.title}>{title}</div>
          <div className={styles.count}>
            {count}
            <span className={styles.unit}>{unit}</span>
          </div>
        </Skeleton>
      </div>
    </div>
  );
}

type DataType = {
  allContents?: string;
  liveContents?: string;
  increaseComments?: string;
  growthRate?: string;
  chartData?: { count?: number; date?: string }[];
  down?: boolean;
};

function Overview() {
  const [data, setData] = useState<DataType>({});
  const [loading, setLoading] = useState(true);
  const t = useLocale();

  const fetchData = () => {
    setLoading(true);
    axios
      .get('/api/workplace/overview-content')
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

  return (
    <div className={styles.container}>
      <Typography.Title heading={5} style={{ marginTop: 0 }}>
        👏 {t['workplace.welcomeBack']}Ryan Septimus
      </Typography.Title>
      <Divider />
      <Row>
        <Col flex={1}>
          <StatisticItem
            icon={<IconCalendar />}
            title={t['workplace.totalOnlyData']}
            count={data.allContents}
            loading={loading}
            unit={t['workplace.pecs']}
          />
        </Col>
        <Divider type="vertical" className={styles.divider} />
        <Col flex={1}>
          <StatisticItem
            icon={<IconContent />}
            title={t['workplace.contentInMarket']}
            count={data.liveContents}
            loading={loading}
            unit={t['workplace.pecs']}
          />
        </Col>
        <Divider type="vertical" className={styles.divider} />
        <Col flex={1}>
          <StatisticItem
            icon={<IconComments />}
            title={t['workplace.comments']}
            count={data.increaseComments}
            loading={loading}
            unit={t['workplace.pecs']}
          />
        </Col>
        <Divider type="vertical" className={styles.divider} />
        <Col flex={1}>
          <StatisticItem
            icon={<IconIncrease />}
            title={t['workplace.growth']}
            count={
              <span>
                {data.growthRate}{' '}
                <IconCaretUp
                  style={{ fontSize: 18, color: 'rgb(var(--green-6))' }}
                />
              </span>
            }
            loading={loading}
          />
        </Col>
      </Row>
      <Divider />
      <div>
        <div className={styles.ctw}>
          <Typography.Paragraph
            className={styles['chart-title']}
            style={{ marginBottom: 0 }}
          >
            {t['workplace.contentData']}
            <span className={styles['chart-sub-title']}>
              ({t['workplace.1year']})
            </span>
          </Typography.Paragraph>
          <Link>{t['workplace.seeMore']}</Link>
        </div>
        <Spin loading={loading} style={{ width: '100%' }}>
          <Chart
            scale={{ value: { min: 0 } }}
            padding={[10, 20, 50, 40]}
            autoFit
            height={300}
            data={data.chartData}
          >
            <Axis
              name="count"
              title
              grid={{
                line: {
                  style: {
                    lineDash: [4, 4],
                  },
                },
              }}
              label={{
                formatter(text) {
                  return `${Number(text) / 1000}k`;
                },
              }}
            />
            <Axis
              name="date"
              grid={{ line: { style: { stroke: '#E5E8EF' } } }}
            />

            <Line
              shape="smooth"
              position="date*count"
              size={3}
              color="l (0) 0:#1EE7FF .57:#249AFF .85:#6F42FB"
            />
            <Area
              position="date*count"
              shape="smooth"
              color="l (0) 0:rgba(17, 126, 255, 0.16) 1:rgba(17, 128, 255, 0)"
            />
            <Tooltip
              showCrosshairs={true}
              showMarkers={true}
              marker={{
                lineWidth: 3,
                stroke: '#1EE7FF',
                fill: '#ffffff',
                symbol: 'circle',
                r: 8,
              }}
              crosshairs={{
                type: 'x',
                line: {
                  style: {
                    lineWidth: 110,
                    stroke: 'l (270) 0:#DBF0FF 1:rgba(193, 229, 255, 0)',
                  },
                },
              }}
            />
          </Chart>
        </Spin>
      </div>
    </div>
  );
}

export default Overview;
