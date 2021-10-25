import { Avatar, Grid, Tag, Space, Typography, Card, Button } from '@arco-design/web-react';
import { IconCheck, IconClockCircle, IconEyeInvisible } from '@arco-design/web-react/icon';
import React from 'react';

import IconLogo from '../../assets/logo.svg';
import styles from './style/index.less';

export default () => {
  const title = (
    <Space>
      <span>Arco Design - 自定义视图</span>
      <Tag color="arcoblue">OPENED</Tag>
      <IconEyeInvisible />
    </Space>
  );
  const description = (
    <Space>
      <Tag color="green">Feature</Tag>
      <Typography.Text type="secondary">#912371203</Typography.Text>
      <Typography.Text type="secondary">
        <IconClockCircle style={{ paddingRight: 4 }} />3 小时前
      </Typography.Text>
    </Space>
  );
  return (
    <Grid.Row justify="space-between" align="center" className={styles.header}>
      <Grid.Col span={12}>
        <Card bordered={false} bodyStyle={{ padding: 0 }}>
          <Space size={16} align="center">
            <Avatar shape="square" size={48} className={styles.headerAvatar}>
              <IconLogo />
            </Avatar>
            <Card.Meta title={title} description={description} />
          </Space>
        </Card>
      </Grid.Col>
      <Grid.Col span={12} style={{ textAlign: 'right' }}>
        <Avatar.Group size={32}>
          <Avatar>
            <img src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" />
          </Avatar>
          <Avatar>
            <img src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" />
          </Avatar>
          <Avatar>
            <img src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
          </Avatar>
          <Avatar>
            <img src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp" />
          </Avatar>
          <Avatar>
            <img src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
          </Avatar>
          <Avatar>+3</Avatar>
        </Avatar.Group>
        <Space style={{ paddingLeft: 24 }}>
          <Button type="primary" status="success" icon={<IconCheck />}>
            同意
          </Button>
          <Button type="outline">重试</Button>
        </Space>
      </Grid.Col>
    </Grid.Row>
  );
};
