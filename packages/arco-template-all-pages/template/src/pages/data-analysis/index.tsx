import React from 'react';
import { Typography, Space, Breadcrumb } from '@arco-design/web-react';

import PublicOpinion from './public-opinion';
import ReportStuckRate from './report-stuck-rate';
import DetailTable from './detail-table';
import useLocale from '../../utils/useLocale';

import styles from './style/index.module.less';

function DataAnalysis() {
  const locale = useLocale();
  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>{locale['menu.visualization']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.visualization.dataAnalysis']}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.wrapper}>
        <Space direction="vertical" size={24} style={{ width: '100%' }}>
          <>
            <Typography.Title style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }} heading={6}>
              {locale['dataAnalysis.title.publicOpinion']}
            </Typography.Title>
            <PublicOpinion />
          </>
          <>
            <Typography.Title style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }} heading={6}>
              {locale['dataAnalysis.title.reportStuckRate']}
            </Typography.Title>
            <ReportStuckRate />
          </>
          <>
            <Typography.Title style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }} heading={6}>
              {locale['dataAnalysis.title.detail']}
            </Typography.Title>
            <DetailTable />
          </>
        </Space>
      </div>
    </div>
  );
}
export default DataAnalysis;
