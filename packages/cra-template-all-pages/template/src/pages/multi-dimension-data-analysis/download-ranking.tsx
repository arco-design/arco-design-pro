// 下载量排行
import React from 'react';
import { Card, List, Typography } from '@arco-design/web-react';
import { IconArrowRise } from '@arco-design/web-react/icon';
import useLocale from '../../utils/useLocale';

import styles from './style/download-ranking.module.less';

export default () => {
  const locale = useLocale();
  const data = [
    {
      name: '产品 1',
      value: 72309,
      growth: 1,
    },
    {
      name: '产品 2',
      value: 12062,
      growth: 1,
    },
    {
      name: '产品 3',
      value: 72309,
      growth: 0,
    },
    {
      name: '产品 4',
      value: 7321,
      growth: 0,
    },
    {
      name: '产品 5',
      value: 4212,
      growth: 0,
    },
    {
      name: '产品 6',
      value: 853,
      growth: 0,
    },
    {
      name: '产品 7',
      value: 853,
      growth: 0,
    },
  ];
  return (
    <Card bordered={false}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }} heading={6}>
        {locale['multiDAnalysis.card.title.downloadRanking']}
      </Typography.Title>
      <List className={styles.list} bordered={false} split={false}>
        {data.map((item, index) => {
          const isActive = index < 3;
          const classNames = [styles['list-item-prefix']];
          if (isActive) {
            classNames.push(styles['list-item-prefix--active']);
          }
          return (
            <List.Item
              extra={
                <span>
                  {item.value}
                  {item.growth > 0 && (
                    <Typography.Text type="error">
                      <IconArrowRise />
                    </Typography.Text>
                  )}
                </span>
              }
              style={{ padding: '9px 0' }}
              key={`${index}`}
            >
              <span className={classNames.join(' ')}>{index + 1}</span>
              <span>{item.name}</span>
            </List.Item>
          );
        })}
      </List>
    </Card>
  );
};
