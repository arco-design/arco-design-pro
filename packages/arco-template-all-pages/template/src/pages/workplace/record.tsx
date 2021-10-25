import React from 'react';
import { Card, Tabs, Result } from '@arco-design/web-react';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

const TabPane = Tabs.TabPane;

function Record() {
  const locale = useLocale();

  return (
    <Card
      title={locale['workplace.record.expense']}
      bordered={false}
      hoverable
      className={styles.panel}
    >
      <Tabs type="text">
        <TabPane key="1" title={locale['workplace.record.thisMonth']}>
          <Result status="404" subTitle={locale['workplace.record.nodata']} />
        </TabPane>
        <TabPane key="2" title={locale['workplace.record.threeMonths']}>
          <Result status="404" subTitle={locale['workplace.record.nodata']} />
        </TabPane>
        <TabPane key="3" title={locale['workplace.record.sixMonths']}>
          <Result status="404" subTitle={locale['workplace.record.nodata']} />
        </TabPane>
      </Tabs>
    </Card>
  );
}

export default Record;
