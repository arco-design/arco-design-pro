import React from 'react';
import { Result, Card, Typography } from '@arco-design/web-react';
import useLocale from './locale/useLocale';

export default function LatestActivity() {
  const t = useLocale();
  return (
    <Card title={t['userInfo.title.latestNotification']}>
      <Result
        status="404"
        title={
          <Typography.Text type="secondary">
            {t['userInfo.nodata']}
          </Typography.Text>
        }
      />
    </Card>
  );
}
