import React from 'react';
import { Button, Card, Typography, Grid, Space, Tag } from '@arco-design/web-react';
import { IconArrowRight, IconEdit, IconFile } from '@arco-design/web-react/icon';

import styles from '../style/index.less';

export default () => {
  return (
    <div>
      <Grid.Row justify="space-between" align="center">
        <Grid.Col span={12}>
          <Typography.Title heading={5} style={{ marginBottom: 16 }}>
            基础信息
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
          <div className={styles.linkContainer}>
            <Space size={4}>
              <IconFile />
              <Typography.Text>云服务器</Typography.Text>
            </Space>
            <div className={styles['linkContainer-icon']}>
              <IconArrowRight />
            </div>
          </div>
        </Card>
        <Card className={styles.cardContainer} bordered={false}>
          <Grid.Row>
            <Grid.Col span={8}>
              <Typography.Title heading={6} style={{ marginTop: 8, marginBottom: 16 }}>
                EIP
              </Typography.Title>
              <Tag color="arcoblue">Arco Design</Tag>
            </Grid.Col>
            <Grid.Col span={8}>
              <Typography.Title heading={6} style={{ marginTop: 8, marginBottom: 16 }}>
                AIP
              </Typography.Title>
              <Space size={4}>
                <Tag color="arcoblue">Arco Design</Tag>
                <Tag color="arcoblue">GIP</Tag>
              </Space>
            </Grid.Col>
            <Grid.Col span={8}>
              <Typography.Title heading={6} style={{ marginTop: 8, marginBottom: 16 }}>
                版本
              </Typography.Title>
              <Tag color="arcoblue">2.3.1</Tag>
            </Grid.Col>
          </Grid.Row>
        </Card>
        <Card className={styles.cardContainer} bordered={false}>
          <Typography.Title heading={6} style={{ marginTop: 8 }}>
            描述信息
          </Typography.Title>
          <Typography.Text type="secondary">针对 Arco Design 自定义视图的 MR。</Typography.Text>
        </Card>
        <Card className={styles.cardContainer} bordered={false}>
          <Typography.Title heading={6} style={{ marginTop: 8 }}>
            分支信息
          </Typography.Title>
        </Card>
      </Space>
    </div>
  );
};
