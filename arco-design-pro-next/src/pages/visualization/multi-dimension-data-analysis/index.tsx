import React, { useState, useEffect } from 'react';
import { Typography, Card, Grid } from '@arco-design/web-react';
import axios from 'axios';
import useLocale from '@/utils/useLocale';
import HorizontalInterval from '@/components/Chart/horizontal-interval';
import AreaPolar from '@/components/Chart/area-polar';
import FactMutiPie from '@/components/Chart/fact-muti-pie';
import locale from './locale';
import DataOverview from './data-overview';
import CardList from './card-list';
import styles from './style/index.module.less';

import './mock';

const { Row, Col } = Grid;
const { Title } = Typography;

function DataAnalysis() {
  const t = useLocale(locale);
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState([]);
  const [polarLoading, setPolarLoading] = useState(false);
  const [polar, setPolar] = useState({ list: [], fields: [] });
  const [mutiPieLoading, setMutiPieLoading] = useState(false);
  const [mutiPie, setMutiPie] = useState([]);

  const getInterval = async () => {
    setLoading(true);
    const { data } = await axios
      .get('/api/muti-dimension/activity')
      .finally(() => {
        setLoading(false);
      });
    setInterval(data);
  };

  const getPolar = async () => {
    setPolarLoading(true);
    const { data } = await axios
      .get('/api/muti-dimension/polar')
      .finally(() => setPolarLoading(false));

    setPolar(data);
  };

  const getMutiPie = async () => {
    setMutiPieLoading(true);
    const { data } = await axios
      .get('/api/muti-dimension/content-source')
      .finally(() => {
        setMutiPieLoading(false);
      });

    setMutiPie(data);
  };

  useEffect(() => {
    getInterval();
    getPolar();
    getMutiPie();
  }, []);

  return (
    <div className={styles.container}>
      <Row gutter={20}>
        <Col span={16}>
          <Card>
            <Title heading={6} style={{ marginTop: '0px' }}>
              {t['multiDAnalysis.card.title.dataOverview']}
            </Title>
            <DataOverview />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Title heading={6} style={{ marginTop: '0px' }}>
              {t['multiDAnalysis.card.title.todayActivity']}
            </Title>
            <HorizontalInterval
              data={interval}
              loading={loading}
              height={160}
            />
          </Card>
          <Card>
            <Title heading={6} style={{ marginTop: '0px' }}>
              {t['multiDAnalysis.card.title.contentTheme']}
            </Title>
            <AreaPolar
              data={polar.list}
              fields={polar.fields}
              height={197}
              loading={polarLoading}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <CardList />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card style={{ marginBottom: 0 }}>
            <Title heading={6} style={{ marginTop: '0px' }}>
              {t['multiDAnalysis.card.title.contentSource']}
            </Title>
            <FactMutiPie loading={mutiPieLoading} data={mutiPie} height={240} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default DataAnalysis;
