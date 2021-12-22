import React, { useEffect, useMemo, useState } from 'react';
import { Breadcrumb, Card, Grid, Table } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import axios from 'axios';
import locale from './locale';
import PublicOpinion from './public-opinion';
import styles from './style/index.module.less';
import MultiInterval from './charts/muti-interval';
import PeriodLine from './charts/period-line';
import './mock';

const { Row, Col } = Grid;

function DataAnalysis() {
  const t = useLocale(locale);
  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const getChartData = async () => {
    setLoading(true);
    const { data } = await axios
      .get('/api/data-analysis/content-publishing')
      .finally(() => setLoading(false));
    setChartData(data);
  };

  const getTableData = async () => {
    setTableLoading(true);
    const { data } = await axios
      .get('/api/data-analysis/author-list')
      .finally(() => setTableLoading(false));
    setTableData(data.list);
  };

  useEffect(() => {
    getChartData();
    getTableData();
  }, []);

  const columns = useMemo(() => {
    return [
      {
        title: t['dataAnalysis.authorTable.rank'],
        dataIndex: 'id',
      },
      {
        title: t['dataAnalysis.authorTable.author'],
        dataIndex: 'author',
      },
      {
        title: t['dataAnalysis.authorTable.content'],
        dataIndex: 'contentCount',
        sorter: (a, b) => a.contentCount - b.contentCount,
      },
      {
        title: t['dataAnalysis.authorTable.click'],
        dataIndex: 'clickCount',
        sorter: (a, b) => a.clickCount - b.clickCount,
      },
    ];
  }, [t]);

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>{t['menu.visualization']}</Breadcrumb.Item>
        <Breadcrumb.Item>{t['menu.visualization.analysis']}</Breadcrumb.Item>
      </Breadcrumb>
      <Card
        title={t['dataAnalysis.title.publicOpinion']}
        bordered={false}
        className={styles.wrapper}
      >
        <PublicOpinion />
      </Card>
      <Row gutter={16}>
        <Col span={14}>
          <Card
            title={t['dataAnalysis.title.publishingRate']}
            bordered={false}
            className={styles.wrapper}
          >
            <MultiInterval data={chartData} loading={loading} />
          </Card>
        </Col>
        <Col span={10}>
          <Card
            title={t['dataAnalysis.title.authorsList']}
            bordered={false}
            className={styles.wrapper}
          >
            <Table
              rowKey="id"
              loading={tableLoading}
              pagination={false}
              data={tableData}
              columns={columns}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card
            title={t['dataAnalysis.title.publishingTiming']}
            bordered={false}
            className={styles.wrapper}
          >
            <PeriodLine data={chartData} loading={loading} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default DataAnalysis;
