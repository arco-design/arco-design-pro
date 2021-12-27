import React, { useState } from 'react';
import { Breadcrumb, Card, Tabs } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import InfoHeader from './header';
import InfoForm from './info';
import Security from './security';
import styles from './style/header.module.less';
import './mock';
import Verified from './verified';

function UserInfo() {
  const t = useLocale(locale);
  const [activeTab, setActiveTab] = useState('basic');
  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{t['menu.user']}</Breadcrumb.Item>
        <Breadcrumb.Item>{t['menu.user.setting']}</Breadcrumb.Item>
      </Breadcrumb>
      <Card style={{ padding: '14px 20px' }}>
        <InfoHeader />
      </Card>
      <Card style={{ marginTop: '16px' }}>
        <Tabs activeTab={activeTab} onChange={setActiveTab} type="rounded">
          <Tabs.TabPane key="basic" title={t['userSetting.title.basicInfo']}>
            <InfoForm />
          </Tabs.TabPane>
          <Tabs.TabPane key="security" title={t['userSetting.title.security']}>
            <Security />
          </Tabs.TabPane>
          <Tabs.TabPane key="verified" title={t['userSetting.label.verified']}>
            <Verified />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </div>
  );
}

export default UserInfo;
