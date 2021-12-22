import React, { useState, useEffect, useMemo } from 'react';
import PublicOpinionCard, { PublicOpinionCardProps } from './card';
import axios from 'axios';
import { Grid } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from '../locale';

const { Row, Col } = Grid;

const cardInfo = [
  {
    key: 'visitor',
    type: 'line',
  },
  {
    key: 'content',
    type: 'interval',
  },
  {
    key: 'comment',
    type: 'line',
  },
  {
    key: 'share',
    type: 'pie',
  },
];

function PublicOpinion() {
  const t = useLocale(locale);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PublicOpinionCardProps[]>([]);

  const getData = async () => {
    const requestList = cardInfo.map(async (info) => {
      const { data } = await axios
        .get(`/api/data-analysis/overview?type=${info.type}`)
        .catch(() => ({ data: {} }));
      return {
        ...data,
        key: info.key,
        chartType: info.type,
      };
    });
    setLoading(true);
    const result = await Promise.all(requestList).finally(() =>
      setLoading(false)
    );
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const formatData = useMemo(() => {
    return data.map((item) => ({
      ...item,
      title: t[`dataAnalysis.publicOpinion.${item.key}`],
    }));
  }, [t, data]);

  return (
    <Row gutter={20}>
      {formatData.map((item, index) => (
        <Col span={6} key={index}>
          <PublicOpinionCard {...item} loading={loading} />
        </Col>
      ))}
    </Row>
  );
}

export default PublicOpinion;
