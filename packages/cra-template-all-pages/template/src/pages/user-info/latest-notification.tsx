import { Result, Card, Typography } from '@arco-design/web-react';
import React from 'react';
import useLocale from '../../utils/useLocale';

export default function LatestActivity() {
  const locale = useLocale();
  return (
    <Card bordered={false} title={locale['userInfo.title.latestNotification']}>
      <Result
        status="404"
        title={<Typography.Text type="secondary">{locale['userInfo.nodata']}</Typography.Text>}
      />
    </Card>
  );
}
