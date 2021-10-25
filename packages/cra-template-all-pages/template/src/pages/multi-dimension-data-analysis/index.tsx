import { Breadcrumb, Grid, Space } from '@arco-design/web-react';
import React from 'react';

import useLocale from '../../utils/useLocale';

import ActiveContributors from './active-contributors';
import DataChainGrowth from './data-chain-growth';
import DataOverview from './data-overview';
import DownloadRaking from './download-ranking';
import DownloadHistory from './download-history';
import ProductEvaluation from './product-evaluation';
import UserDistributionGeo from './user-distribution-geo';
import UserDistributionType from './user-distribution-type';

import styles from './style/index.module.less';

function DataAnalysis() {
  const locale = useLocale();
  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>{locale['menu.visualization']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.visualization.multiDimensionDataAnalysis']}</Breadcrumb.Item>
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
