import { Button, Card, Radio, Tabs } from '@arco-design/web-react';
import React from 'react';
import useLocale from '../../utils/useLocale';
import DataStatisticList from './data-statistic-list';
import styles from './style/index.module.less';

export default function DataStatistic() {
  const locale = useLocale();
  return (
    <Card bordered={false}>
      <Tabs defaultActiveTab="liveMethod">
        <Tabs.TabPane key="liveMethod" title={locale['monitor.tab.title.liveMethod']} />
        <Tabs.TabPane
          key="virtualPopulation"
          title={locale['monitor.tab.title.virtualPopulation']}
        />
      </Tabs>
      <div className={styles['data-statistic-content']}>
        <Radio.Group defaultValue="3" type="button">
          <Radio value="1">{locale['monitor.liveMethod.normal']}</Radio>
          <Radio value="2">{locale['monitor.liveMethod.flowControl']}</Radio>
          <Radio value="3">{locale['monitor.liveMethod.video']}</Radio>
          <Radio value="4">{locale['monitor.liveMethod.web']}</Radio>
        </Radio.Group>

        <div className={styles['data-statistic-list-wrapper']}>
          <div className={styles['data-statistic-list-header']}>
            <Button type="text">{locale['monitor.editCarousel']}</Button>
            <Button disabled>{locale['monitor.startCarousel']}</Button>
          </div>
          <div className={styles['data-statistic-list-content']}>
            <DataStatisticList />
          </div>
        </div>
      </div>
    </Card>
  );
}
