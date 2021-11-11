import React from 'react';
import { Breadcrumb, Grid, Space } from '@arco-design/web-react';
import ActiveContributors from './active-contributors';
import DataChainGrowth from './data-chain-growth';
import DataOverview from './data-overview';
import DownloadRaking from './download-ranking';
import DownloadHistory from './download-history';
import ProductEvaluation from './product-evaluation';
import UserDistributionGeo from './user-distribution-geo';
import UserDistributionType from './user-distribution-type';
import useLocale from './locale/useLocale';
import styles from './style/index.module.less';
import './mock';

function DataAnalysis() {
  const t = useLocale();
  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>{t['menu.visualization']}</Breadcrumb.Item>
        <Breadcrumb.Item>{t['menu.visualization.multiDimensionDataAnalysis']}</Breadcrumb.Item>
      </Breadcrumb>
      <Space direction="vertical" size={12} style={{ width: '100%' }}>
        <DataOverview />
        <DataChainGrowth />
        <div>
          <Grid.Row gutter={12}>
            <Grid.Col span={16}>
              <DownloadHistory />
            </Grid.Col>
            <Grid.Col span={8}>
              <DownloadRaking />
            </Grid.Col>
          </Grid.Row>
        </div>
        <div>
          <Grid.Row gutter={12}>
            <Grid.Col span={6}>
              <UserDistributionGeo />
            </Grid.Col>
            <Grid.Col span={6}>
              <UserDistributionType />
            </Grid.Col>
            <Grid.Col span={6}>
              <ProductEvaluation />
            </Grid.Col>
            <Grid.Col span={6}>
              <ActiveContributors />
            </Grid.Col>
          </Grid.Row>
        </div>
      </Space>
    </div>
  );
}
export default DataAnalysis;
