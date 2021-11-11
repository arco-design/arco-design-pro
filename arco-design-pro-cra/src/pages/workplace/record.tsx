import React from 'react';
import { Card, Tabs, Result } from '@arco-design/web-react';
import useLocale from './locale/useLocale';
import styles from './style/index.module.less';

const TabPane = Tabs.TabPane;

function Record() {
  const t = useLocale();

  return (
    <Card title={t['workplace.record.expense']} bordered={false} hoverable className={styles.panel}>
      <Tabs type="text">
        <TabPane key="1" title={t['workplace.record.thisMonth']}>
          <Result status="404" subTitle={t['workplace.record.nodata']} />
        </TabPane>
        <TabPane key="2" title={t['workplace.record.threeMonths']}>
          <Result status="404" subTitle={t['workplace.record.nodata']} />
        </TabPane>
        <TabPane key="3" title={t['workplace.record.sixMonths']}>
          <Result status="404" subTitle={t['workplace.record.nodata']} />
        </TabPane>
      </Tabs>
    </Card>
  );
}

export default Record;
