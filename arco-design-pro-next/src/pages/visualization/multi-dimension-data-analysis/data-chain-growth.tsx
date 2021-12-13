// 数据环比
import React from 'react';
import { Grid } from '@arco-design/web-react';
import Item from './data-chain-growth-item';
import useLocale from './locale/useLocale';

export default () => {
  const t = useLocale();
  return (
    <div>
      <Grid.Row gutter={12}>
        <Grid.Col span={6}>
          <Item
            title={t['multiDAnalysis.card.title.officeVisitors']}
            quota="office"
            chartType="line"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Item
            title={t['multiDAnalysis.card.title.downloads']}
            quota="downLoad"
            chartType="bar"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Item
            title={t['multiDAnalysis.card.title.downloads']}
            quota="downLoad"
            chartType="line"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Item
            title={t['multiDAnalysis.card.title.downloads']}
            quota="downLoad"
            chartType="bar"
          />
        </Grid.Col>
      </Grid.Row>
    </div>
  );
};
