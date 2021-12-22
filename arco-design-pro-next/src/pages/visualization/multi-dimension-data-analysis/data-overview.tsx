// 数据总览
import React, { useEffect, useState, useMemo } from 'react';
import {
  Card,
  Typography,
  Grid,
  Statistic,
  Spin,
} from '@arco-design/web-react';
import axios from 'axios';
import {
  IconUser,
  IconMosaic,
  IconCamera,
  IconDesktop,
} from '@arco-design/web-react/icon';
import useLocale from './locale/useLocale';
import styles from './style/data-overview.module.less';
import MutiAreaLine from '@/components/Chart/muti-area-line';

const { Title } = Typography;
export default () => {
  const t = useLocale();
  const [overview, setOverview] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const { data } = await axios
      .get('/api/muti-dimension/overview')
      .finally(() => setLoading(false));

    const { overviewData, chartData } = data;
    setLineData(chartData);
    setOverview(overviewData);
  };

  useEffect(() => {
    getData();
  }, []);

  const formatedData = useMemo(() => {
    return [
      {
        title: t['multiDAnalysis.dataOverview.contentProduction'],
        icon: <IconMosaic />,
        value: overview[0],
        background: 'rgb(var(--orange-2))',
        color: 'rgb(var(--orange-6))',
      },
      {
        title: t['multiDAnalysis.dataOverview.contentClicks'],
        icon: <IconDesktop />,
        value: overview[1],
        background: 'rgb(var(--cyan-2))',
        color: 'rgb(var(--cyan-6))',
      },
      {
        title: t['multiDAnalysis.dataOverview.contextExposure'],
        value: overview[2],
        icon: <IconCamera />,
        background: 'rgb(var(--arcoblue-1))',
        color: 'rgb(var(--arcoblue-6))',
      },
      {
        title: t['multiDAnalysis.dataOverview.activeUsers'],
        value: overview[3],
        icon: <IconUser />,
        background: 'rgb(var(--purple-1))',
        color: 'rgb(var(--purple-6))',
      },
    ];
  }, [t, overview]);

  return (
    <Grid.Row justify="space-between">
      {formatedData.map((item, index) => (
        <Grid.Col span={24 / formatedData.length} key={`${index}`}>
          <Card className={styles.card} title={null}>
            <Title heading={6}>{item.title}</Title>
            <div className={styles.content}>
              <div
                style={{ backgroundColor: item.background, color: item.color }}
                className={styles['content-icon']}
              >
                {item.icon}
              </div>
              {loading ? (
                <Spin />
              ) : (
                <Statistic value={item.value} groupSeparator />
              )}
            </div>
          </Card>
        </Grid.Col>
      ))}
      <Grid.Col span={24}>
        <MutiAreaLine data={lineData} loading={loading} />
      </Grid.Col>
    </Grid.Row>
  );
};
