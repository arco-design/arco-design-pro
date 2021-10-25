import { Space, Breadcrumb } from '@arco-design/web-react';
import React from 'react';
import { useSelector } from 'react-redux';
import ChatPanel from './chat-panel';
import Studio from './studio';
import DataStatistic from './data-statistic';
import StudioStatus from './studio-status';
import QuickOperation from './quick-operation';
import StudioInformation from './studio-information';
import styles from './style/index.module.less';
import { ReducerState } from '../../redux';
import useLocale from '../../utils/useLocale';

export default function Monitor() {
  const locale = useLocale();
  const userInfo = useSelector((state: ReducerState) => state.global.userInfo);
  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{locale['menu.dashboard']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.dashboard.monitor']}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.layout}>
        <div className={styles['layout-left-side']}>
          <ChatPanel />
        </div>
        <div className={styles['layout-content']}>
          <Space size={12} direction="vertical" style={{ width: '100%' }}>
            <Studio userInfo={userInfo} />
            <DataStatistic />
          </Space>
        </div>
        <div className={styles['layout-right-side']}>
          <Space size={12} direction="vertical" style={{ width: '100%' }}>
            <StudioStatus />
            <QuickOperation />
            <StudioInformation />
          </Space>
        </div>
      </div>
    </div>
  );
}
