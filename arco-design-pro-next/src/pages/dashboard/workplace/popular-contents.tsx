import React, { useState, useEffect, useCallback } from 'react';
import { Link, Card, Radio, Table } from '@arco-design/web-react';
import { IconCaretUp } from '@arco-design/web-react/icon';
import axios from 'axios';
import useLocale from './locale/useLocale';

function PopularContent() {
  const t = useLocale();
  const [type, setType] = useState('text');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(() => {
    setLoading(true);
    axios
      .get(`/api/workplace/popular-contents?page=${page}&pageSize=5`)
      .then((res) => {
        setData(res.data.list);
        setTotal(res.data.total);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  const columns = [
    {
      title: t['workplace.column.rank'],
      dataIndex: 'rank',
    },
    {
      title: t['workplace.column.title'],
      dataIndex: 'title',
    },
    {
      title: t['workplace.column.pv'],
      dataIndex: 'pv',
      render: (text) => {
        return `${text / 1000}k`;
      },
    },
    {
      title: t['workplace.column.increase'],
      dataIndex: 'increase',
      render: (text) => {
        return (
          <span>
            {`${(text * 100).toFixed(2)}%`}
            <IconCaretUp style={{ color: 'rgb(var(--green-6))' }} />
          </span>
        );
      },
    },
  ];

  return (
    <Card
      title={t['workplace.popularContents']}
      bordered={false}
      extra={<Link>{t['workplace.seeMore']}</Link>}
      headerStyle={{ borderBottom: 0 }}
    >
      <Radio.Group
        type="button"
        value={type}
        onChange={setType}
        options={[
          { label: t['workplace.text'], value: 'text' },
          { label: t['workplace.image'], value: 'image' },
          { label: t['workplace.video'], value: 'video' },
        ]}
        style={{ marginBottom: 16 }}
      />
      <Table
        rowKey="rank"
        columns={columns}
        data={data}
        loading={loading}
        onChange={(pagination) => {
          setPage(pagination.current);
        }}
        pagination={{ total, current: page, pageSize: 5, simple: true }}
      />
    </Card>
  );
}

export default PopularContent;
