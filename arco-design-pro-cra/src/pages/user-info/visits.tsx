import React, { useEffect, useState } from 'react';
import { Statistic, Typography, Space, Card } from '@arco-design/web-react';
import { IconArrowRise } from '@arco-design/web-react/icon';
import axios from 'axios';
import useLocale from './locale/useLocale';
import styles from './style/index.module.less';

export default function LatestActivity() {
  const t = useLocale();
  const [visitsList, setVisitsList] = useState([]);

  function fetchVisitsList() {
    axios.get('/api/user/visits').then((res) => {
      setVisitsList(res.data || []);
    });
  }

  useEffect(() => {
    fetchVisitsList();
  }, []);

  return (
    <div>
      <Space size={12}>
        {visitsList.map((visits) => (
          <Card key={visits.name} bordered={false} className={styles['visits-item']}>
            <Statistic
              groupSeparator
              title={visits.name}
              value={visits.visits}
              suffix={
                <Typography.Text type="secondary" className={styles['visits-unit']}>
                  {t['userInfo.visits.unit']}
                </Typography.Text>
              }
            />
            <div>
              <Typography.Text type="secondary" className={styles['visits-label']}>
                {t['userInfo.visits.lastMonth']}
              </Typography.Text>
              <Typography.Text type="error">
                {visits.growth}
                <IconArrowRise />
              </Typography.Text>
            </div>
          </Card>
        ))}
      </Space>
    </div>
  );
}
