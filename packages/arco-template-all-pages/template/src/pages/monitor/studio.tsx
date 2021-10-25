import { Card, Typography, Avatar, Space, Grid } from '@arco-design/web-react';
import { IconMore } from '@arco-design/web-react/icon';
import React from 'react';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

import previewImage from '../../assets/monitor-studio-preview.png';

interface StudioProps {
  userInfo: {
    name?: string;
    avatar?: string;
  };
}

export default function Studio(props: StudioProps) {
  const locale = useLocale();
  const { userInfo } = props;
  return (
    <Card bordered={false}>
      <Grid.Row>
        <Grid.Col span={16}>
          <Typography.Title style={{ marginTop: 0, marginBottom: 16 }} heading={6}>
            {locale['monitor.title.studioPreview']}
          </Typography.Title>
        </Grid.Col>
        <Grid.Col span={8} style={{ textAlign: 'right' }}>
          <IconMore />
        </Grid.Col>
      </Grid.Row>
      <div className={styles['studio-wrapper']}>
        <img src={previewImage} className={styles['studio-preview']} />
        <div className={styles['studio-bar']}>
          {userInfo && (
            <div>
              <Space size={12}>
                <Avatar size={24}>
                  <img src={userInfo.avatar} />
                </Avatar>
                <Typography.Text>
                  {userInfo.name}
                  {locale['monitor.studioPreview.studio']}
                </Typography.Text>
              </Space>
            </div>
          )}
          <Typography.Text type="secondary">
            3,6000 {locale['monitor.studioPreview.watching']}
          </Typography.Text>
        </div>
      </div>
    </Card>
  );
}
