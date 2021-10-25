import React from 'react';
import { useSelector } from 'react-redux';
import { Space, Tabs } from '@arco-design/web-react';
import { IconFaceSmileFill, IconFile, IconUser } from '@arco-design/web-react/icon';
import { ReducerState } from '../../redux';
import useLocale from '../../utils/useLocale';
import UserInfoHeader from './header';
import Visits from './visits';
import Other from './other';
import LatestNotification from './latest-notification';
import Overview from './overview';
import styles from './style/index.module.less';

function UserInfo() {
  const locale = useLocale();
  const userInfo = useSelector((state: ReducerState) => state.global.userInfo);
  if (!userInfo) return null;
  const tabList = [
    {
      key: 'overview',
      title: locale['userInfo.tab.title.overview'],
      icon: <IconFaceSmileFill />,
      component: <Overview />,
    },
    {
      key: 'project',
      title: locale['userInfo.tab.title.project'],
      icon: <IconFile />,
      component: <Overview />,
    },
    {
      key: 'team',
      title: locale['userInfo.tab.title.team'],
      icon: <IconUser />,
      component: <Overview />,
    },
  ];

  return (
    <div className={styles.container}>
      <UserInfoHeader userInfo={userInfo} />
      <div className={styles.content}>
        <div className={styles['content-left']}>
          <Tabs>
            {tabList.map((tab) => (
              <Tabs.TabPane
                key={tab.key}
                title={
                  <div>
                    <Space size={6}>
                      {tab.icon}
                      <span>{tab.title}</span>
                    </Space>
                  </div>
                }
              >
                <div className={styles['tab-pane-wrapper']}>{tab.component}</div>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
        <div className={styles['content-right']}>
          <Space size={12} direction="vertical">
            <Visits />
            <Other />
            <LatestNotification />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
