import React, { useState, useEffect, useMemo } from 'react';
import {
  Table,
  Typography,
  Button,
  DatePicker,
  Input,
  Breadcrumb,
  Card,
  PaginationProps,
} from '@arco-design/web-react';
import axios from 'axios';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from './style/index.module.less';

function SearchTable() {
  const t = useLocale(locale);

  const columns = useMemo(
    () => [
      {
        title: t['searchTable.columns.name'],
        dataIndex: 'name',
      },
      {
        title: t['searchTable.columns.workflow'],
        dataIndex: 'workflow',
        render: (value) => <Typography.Text copyable>{value}</Typography.Text>,
      },
      {
        title: t['searchTable.columns.period'],
        dataIndex: 'period',
      },
      {
        title: t['searchTable.columns.statistic'],
        dataIndex: 'statistic',
      },
      {
        title: t['searchTable.columns.createdTime'],
        dataIndex: 'createdTime',
      },
      {
        title: t['searchTable.columns.deadline'],
        dataIndex: 'deadline',
      },
      {
        title: t['searchTable.columns.operations'],
        dataIndex: 'operations',
        render: () => (
          <div className={styles.operations}>
            <Button type="text" size="small">
              {t['searchTable.columns.operations.view']}
            </Button>
            <Button type="text" size="small">
              {t['searchTable.columns.operations.update']}
            </Button>
            <Button type="text" status="danger" size="small">
              {t['searchTable.columns.operations.delete']}
            </Button>
          </div>
        ),
      },
    ],
    [locale]
  );

  const [data, setData] = useState([]);
  const [pagination, setPatination] = useState<PaginationProps>({
    sizeCanChange: true,
    showTotal: true,
    pageSize: 10,
    current: 1,
    pageSizeChangeResetCurrent: true,
  });
  const [loading, setLoading] = useState(true);
  const [formParams, setFormParams] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData(current = 1, pageSize = 10, params = {}) {
    setLoading(true);
    axios
      .get(`/api/policy`, {
        params: {
          page: current,
          pageSize,
          ...params,
        },
      })
      .then((res) => {
        setData(res.data.list);
        setPatination({ ...pagination, current, pageSize, total: res.data.total });
        setLoading(false);
        setFormParams(params);
      });
  }

  function onChangeTable(pagination) {
    const { current, pageSize } = pagination;
    fetchData(current, pageSize, formParams);
  }

  function onSearch(keyword) {
    fetchData(1, pagination.pageSize, { keyword });
  }

  function onDateChange(date) {
    const [start, end] = date;
    fetchData(1, pagination.pageSize, {
      createdTimeStart: start,
      createdTimeEnd: end,
    });
  }

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{t['menu.list']}</Breadcrumb.Item>
        <Breadcrumb.Item>{t['menu.list.searchTable']}</Breadcrumb.Item>
      </Breadcrumb>
      <Card bordered={false}>
        <div className={styles.toolbar}>
          <div>
            <Button type="primary">{t['searchTable.addPolicy']}</Button>
          </div>
          <div>
            <DatePicker.RangePicker style={{ marginRight: 8 }} onChange={onDateChange} />
            <Input.Search
              style={{ width: 300 }}
              searchButton
              placeholder={t['searchTable.placeholder.name']}
              onSearch={onSearch}
            />
          </div>
        </div>
        <Table
          rowKey="id"
          loading={loading}
          onChange={onChangeTable}
          pagination={pagination}
          columns={columns}
          data={data}
        />
      </Card>
    </div>
  );
}

export default SearchTable;
