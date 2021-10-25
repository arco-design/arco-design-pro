import React from 'react';
import { Card, Tabs, Typography } from '@arco-design/web-react';

import ProfileHeader from './header';
import TabOverView from './overview';
import useLocale from '../../utils/useLocale';
import styles from './style/index.less';

function ComplexProfile() {
  const locale = useLocale();
  return (
    <div className={styles.container}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 16 }} heading={5}>
        {locale['menu.profile.complex']}
      </Typography.Title>
      <Card bordered={false}>
        <ProfileHeader />
        <Tabs defaultActiveTab="overview">
          <Tabs.TabPane title="总览" key="overview" />
          <Tabs.TabPane title="时间轴" key="timeline" />
          <Tabs.TabPane title="提交数" key="commit" />
          <Tabs.TabPane title="改动数" key="change" />
          <Tabs.TabPane title="包" key="package" />
          <Tabs.TabPane title="进度" key="process" />
        </Tabs>
        <div className={styles.tabContent}>
          <TabOverView />
        </div>
      </Card>
    </div>
  );
}

export default ComplexProfile;
