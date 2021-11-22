// 数据总览
import React from 'react';
import { Card, Typography, Grid, Statistic } from '@arco-design/web-react';
import { IconCode, IconUser, IconDesktop } from '@arco-design/web-react/icon';
import useLocale from './locale/useLocale';
import styles from './style/data-overview.module.less';

export default () => {
  const t = useLocale();
  const data = [
    {
      title: t['multiDAnalysis.dataOverview.components'],
      value: 20,
      prefix: {
        icon: <IconCode />,
        background: '#f53f3f',
      },
    },
    {
      title: t['multiDAnalysis.dataOverview.issues'],
      value: 20,
      prefix: {
        icon: <IconDesktop />,
        background: '#0fc6c2',
      },
    },
    {
      title: t['multiDAnalysis.dataOverview.activeContributors'],
      value: 128,
      prefix: {
        icon: <IconUser />,
        background: '#175dff',
      },
    },
    {
      title: t['multiDAnalysis.dataOverview.todayDownloads'],
      value: 1275,
      prefix: {
        icon: <IconCode />,
        background: '#ff7d03',
      },
    },
    {
      title: t['multiDAnalysis.dataOverview.todayDownloads'],
      value: 1275,
      prefix: {
        icon: <IconCode />,
        background: '#ff7d03',
      },
    },
    {
      title: t['multiDAnalysis.dataOverview.todayDownloads'],
      value: 1275,
      prefix: {
        icon: <IconCode />,
        background: '#ff7d03',
      },
    },
  ];
  return (
    <Card bordered={false}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }} heading={6}>
        {t['multiDAnalysis.card.title.dataOverview']}
      </Typography.Title>
      <Grid.Row justify="space-between">
        {data.map((item, index) => (
          <Grid.Col span={24 / data.length} key={`${index}`}>
            <Statistic
              title={item.title}
              value={item.value}
              groupSeparator
              prefix={
                <span
                  className={styles['statistic-prefix']}
                  style={{ background: item.prefix.background }}
                >
                  {item.prefix.icon}
                </span>
              }
            />
          </Grid.Col>
        ))}
      </Grid.Row>
    </Card>
  );
};
