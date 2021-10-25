import React, { useEffect, useState } from 'react';
import { DatePicker, Form, Input, Table, Button, Grid } from '@arco-design/web-react';
import omit from 'lodash/omit';
import axios from 'axios';
import dayjs from 'dayjs';
import { IconDownload } from '@arco-design/web-react/icon';
import useLocale from '../../utils/useLocale';

function DetailTable() {
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    pageSize: 10,
    roomNumber: '#3032',
    startTime: dayjs(new Date()).subtract(1, 'day').format('YYYY-MM-DD'),
    endTime: dayjs(new Date()).format('YYYY-MM-DD'),
  });
  const [tableData, setTableData] = useState({ list: [], total: 0 });

  const columns = [
    {
      title: locale['dataAnalysis.column.userId'],
      dataIndex: 'userId',
    },
    {
      title: locale['dataAnalysis.column.deviceId'],
      dataIndex: 'deviceId',
    },
    {
      title: locale['dataAnalysis.column.system'],
      dataIndex: 'system',
    },
    {
      title: locale['dataAnalysis.column.content'],
      dataIndex: 'content',
    },
    {
      title: locale['dataAnalysis.column.time'],
      dataIndex: 'time',
    },
    {
      title: locale['dataAnalysis.column.actions'],
      render: () => <Button type="text">{locale['dataAnalysis.diagnose']}</Button>,
    },
  ];

  const search = (params) => {
    setLoading(true);
    axios
      .get('/api/feedbackList', {
        params,
      })
      .then((res) => {
        setTableData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const formatFormValues = (values) => {
    const time = values.time || [];

    return {
      ...omit(values, 'time'),
      startTime: time[0],
      endTime: time[1],
    };
  };

  const onFormChange = (_value, values) => {
    setSearchParams((params) => ({
      ...params,
      ...formatFormValues(values),
      page: 1,
    }));
  };

  const onTableChange = ({ current, pageSize }) => {
    setSearchParams((params) => ({
      ...params,
      page: current,
      pageSize,
    }));
  };

  useEffect(() => {
    search(searchParams);
  }, [searchParams]);

  return (
    <div>
      <Grid.Row style={{ marginBottom: 4 }} align="center" justify="space-between">
        <Grid.Col span={20}>
          <Form
            layout="inline"
            onChange={onFormChange}
            initialValues={{
              roomNumber: searchParams.roomNumber,
              time: [searchParams.startTime, searchParams.endTime],
            }}
          >
            <Form.Item label={locale['dataAnalysis.label.timeRange']} field="time">
              <DatePicker.RangePicker />
            </Form.Item>
            <Form.Item label={locale['dataAnalysis.label.roomNumber']} field="roomNumber">
              <Input />
            </Form.Item>
          </Form>
        </Grid.Col>
        <Grid.Col span={4} style={{ textAlign: 'right' }}>
          <Button type="text" icon={<IconDownload />}>
            {locale['dataAnalysis.download']}
          </Button>
        </Grid.Col>
      </Grid.Row>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        data={tableData.list}
        pagination={{
          total: tableData.total,
          current: searchParams.page,
          pageSize: searchParams.pageSize,
          showTotal: true,
          sizeCanChange: true,
        }}
        onChange={onTableChange}
      />
    </div>
  );
}

export default DetailTable;
