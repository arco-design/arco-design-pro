import React from 'react';
import { Button, Card, Typography, Grid, Space } from '@arco-design/web-react';
import { IconEdit } from '@arco-design/web-react/icon';

import styles from '../style/index.less';

export default () => {
  return (
    <div>
      <Grid.Row justify="space-between" align="center">
        <Grid.Col span={12}>
          <Typography.Title heading={5} style={{ marginBottom: 16 }}>
            Pipeline
          </Typography.Title>
        </Grid.Col>
        <Grid.Col span={12} style={{ textAlign: 'right' }}>
          <Button icon={<IconEdit />}>编辑</Button>
        </Grid.Col>
      </Grid.Row>
      <Space size={16} direction="vertical" style={{ width: '100%' }}>
        <Card className={styles.cardContainer} bordered={false}>
          <Typography.Title heading={6} style={{ marginTop: 8 }}>
            相关链接
          </Typography.Title>
          <Typography.Title heading={6} style={{ marginTop: 8 }}>
            相关链接
          </Typography.Title>
        </Card>
      </Space>
    </div>
  );
};
