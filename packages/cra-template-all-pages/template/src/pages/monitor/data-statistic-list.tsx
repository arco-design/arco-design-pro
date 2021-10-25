import { Table, Tag, Typography } from '@arco-design/web-react';
import React from 'react';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';
import previewImage from '../../assets/monitor-studio-preview.png';

export default function QuickOperation() {
  const locale = useLocale();
  const columns = [
    {
      title: locale['monitor.list.title.order'],
      render: (_col, _record, index) => <span>{index + 1}</span>,
    },
    {
      title: locale['monitor.list.title.cover'],
      dataIndex: 'cover',
      render: (_col, record) => (
        <div className={styles['data-statistic-list-cover-wrapper']}>
          <img src={record.cover} />
          {record.status === -1 && (
            <Tag color="red" className={styles['data-statistic-list-cover-tag']}>
              {locale['monitor.list.tag.auditFailed']}
            </Tag>
          )}
        </div>
      ),
    },
    {
      title: locale['monitor.list.title.name'],
      dataIndex: 'name',
    },
    {
      dataIndex: 'duration',
      title: locale['monitor.list.title.duration'],
    },
    {
      dataIndex: 'id',
      title: locale['monitor.list.title.id'],
    },
  ];
  const data = [
    {
      cover: previewImage,
      name: '视频直播',
      duration: '00:05:19',
      id: '54e23ade',
      status: -1,
    },
  ];
  return (
    <div className={styles['']}>
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        rowSelection={{
          type: 'checkbox',
        }}
        border={false}
        pagination={false}
      />
      <Typography.Text type="secondary" className={styles['data-statistic-list-tip']}>
        {locale['monitor.list.tip.rotations']}
        {data.length}
        {locale['monitor.list.tip.rest']}
      </Typography.Text>
    </div>
  );
}
