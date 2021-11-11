import React from 'react';
import { Typography, Space, Breadcrumb } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import PublicOpinion from './public-opinion';
import ReportStuckRate from './report-stuck-rate';
import DetailTable from './detail-table';
import styles from './style/index.module.less';

function DataAnalysis() {
  const t = useLocale(locale);
  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>{t['menu.visualization']}</Breadcrumb.Item>
        <Breadcrumb.Item>{t['menu.visualization.dataAnalysis']}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.wrapper}>
        <Space direction="vertical" size={24} style={{ width: '100%' }}>
          <>
            <Typography.Title style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }} heading={6}>
              {t['dataAnalysis.title.publicOpinion']}
            </Typography.Title>
            <PublicOpinion />
          </>
          <>
            <Typography.Title style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }} heading={6}>
              {t['dataAnalysis.title.reportStuckRate']}
            </Typography.Title>
            <ReportStuckRate />
          </>
          <>
            <Typography.Title style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }} heading={6}>
              {t['dataAnalysis.title.detail']}
            </Typography.Title>
            <DetailTable />
          </>
        </Space>
      </div>
    </div>
  );
}
export default DataAnalysis;
