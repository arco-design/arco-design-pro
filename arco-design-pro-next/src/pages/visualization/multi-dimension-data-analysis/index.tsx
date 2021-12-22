import React from 'react';
import { Breadcrumb, Typography, Card, Grid } from '@arco-design/web-react';
import DataOverview from './data-overview';
import useLocale from './locale/useLocale';
import styles from './style/index.module.less';
import './mock';

const { Row, Col } = Grid;
const { Title } = Typography;
function DataAnalysis() {
  const t = useLocale();
  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>{t['menu.visualization']}</Breadcrumb.Item>
        <Breadcrumb.Item>
          {t['menu.visualization.multiDimensionDataAnalysis']}
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={20}>
        <Col span={16}>
          <Card>
            <Title heading={6}>
              {t['multiDAnalysis.card.title.dataOverview']}
            </Title>
            <DataOverview />
          </Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
      </Row>
    </div>
  );
}
export default DataAnalysis;
