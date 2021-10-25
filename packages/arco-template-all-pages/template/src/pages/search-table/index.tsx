import React, { useEffect } from 'react';
import {
  Table,
  Typography,
  Button,
  DatePicker,
  Input,
  Breadcrumb,
  Card,
} from '@arco-design/web-react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  UPDATE_FORM_PARAMS,
  UPDATE_LIST,
  UPDATE_LOADING,
  UPDATE_PAGINATION,
} from './redux/actionTypes';
import useLocale from '../../utils/useLocale';
import { ReducerState } from '../../redux';
import styles from './style/index.module.less';

function SearchTable() {
  const locale = useLocale();

  const columns = [
    {
      title: locale['searchTable.columns.name'],
      dataIndex: 'name',
    },
    {
      title: locale['searchTable.columns.workflow'],
      dataIndex: 'workflow',
      render: (value) => <Typography.Text copyable>{value}</Typography.Text>,
    },
    {
      title: locale['searchTable.columns.period'],
      dataIndex: 'period',
    },
    {
      title: locale['searchTable.columns.statistic'],
      dataIndex: 'statistic',
    },
    {
      title: locale['searchTable.columns.createdTime'],
      dataIndex: 'createdTime',
    },
    {
      title: locale['searchTable.columns.deadline'],
      dataIndex: 'deadline',
    },
    {
      title: locale['searchTable.columns.operations'],
      dataIndex: 'operations',
      render: () => (
        <div className={styles.operations}>
          <Button type="text" size="small">
            {locale['searchTable.columns.operations.view']}
          </Button>
          <Button type="text" size="small">
            {locale['searchTable.columns.operations.update']}
          </Button>
          <Button type="text" status="danger" size="small">
            {locale['searchTable.columns.operations.delete']}
          </Button>
        </div>
      ),
    },
  ];

  const searchTableState = useSelector((state: ReducerState) => state.searchTable);

  const { data, pagination, loading, formParams } = searchTableState;

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData(current = 1, pageSize = 10, params = {}) {
    dispatch({ type: UPDATE_LOADING, payload: { loading: true } });
    axios
      .get(`/api/policy`, {
        params: {
          page: current,
          pageSize,
          ...params,
        },
      })
      .then((res) => {
        dispatch({ type: UPDATE_LIST, payload: { data: res.data.list } });
        dispatch({
          type: UPDATE_PAGINATION,
          payload: { pagination: { ...pagination, current, pageSize, total: res.data.total } },
        });
        dispatch({ type: UPDATE_LOADING, payload: { loading: false } });
        dispatch({ type: UPDATE_FORM_PARAMS, payload: { params } });
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
        <Breadcrumb.Item>{locale['menu.list']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.list.searchTable']}</Breadcrumb.Item>
      </Breadcrumb>
      <Card bordered={false}>
        <div className={styles.toolbar}>
          <div>
            <Button type="primary">{locale['searchTable.addPolicy']}</Button>
          </div>
          <div>
            <DatePicker.RangePicker style={{ marginRight: 8 }} onChange={onDateChange} />
            <Input.Search
              style={{ width: 300 }}
              searchButton
              placeholder={locale['searchTable.placeholder.name']}
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
