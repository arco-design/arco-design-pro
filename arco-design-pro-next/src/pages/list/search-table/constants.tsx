import React from 'react';
import { Button, Typography, Tag } from '@arco-design/web-react';
import IconText from './icons/text.svg';
import IconHorizontalVideo from './icons/horizontal.svg';
import IconVerticalVideo from './icons/vertical.svg';
import dayjs from 'dayjs';
import styles from './style/index.module.less';

const { Text } = Typography;

export const ContentType = ['图文', '横版短视频', '竖版短视频'];
export const FilterType = ['规则筛选', '人工'];
export const Status = ['已上线', '未上线'];

const ContentIcon = [
  <IconText key={0} />,
  <IconHorizontalVideo key={1} />,
  <IconVerticalVideo key={2} />,
];

export default function getColumns(
  t: any,
  callback: (record: Record<string, any>, type: string) => Promise<void>
) {
  return [
    {
      title: t['searchTable.columns.id'],
      dataIndex: 'id',
      render: (value) => <Text copyable>{value}</Text>,
    },
    {
      title: t['searchTable.columns.name'],
      dataIndex: 'name',
    },
    {
      title: t['searchTable.columns.contentType'],
      dataIndex: 'contentType',
      render: (value) => (
        <div className={styles.contentType}>
          {ContentIcon[value]}
          {ContentType[value]}
        </div>
      ),
    },
    {
      title: t['searchTable.columns.filterType'],
      dataIndex: 'filterType',
      render: (value) => FilterType[value],
    },
    {
      title: t['searchTable.columns.contentNum'],
      dataIndex: 'count',
      sorter: (a, b) => a.count - b.count,
    },
    {
      title: t['searchTable.columns.createdTime'],
      dataIndex: 'createdTime',
      render: (x) => dayjs().subtract(x, 'days').format('YYYY-MM-DD HH:mm:ss'),
      sorter: (a, b) => b.createdTime - a.createdTime,
    },
    {
      title: t['searchTable.columns.status'],
      dataIndex: 'status',
      render: (x) => {
        if (x === 0) {
          return <Tag color="#165DFF">{Status[x]}</Tag>;
        }
        return <Tag color="#F53F3F">{Status[x]}</Tag>;
      },
    },
    {
      title: t['searchTable.columns.operations'],
      dataIndex: 'operations',
      render: (_, record) => (
        <div className={styles.operations}>
          {record.status === 1 ? (
            <>
              <Button
                type="text"
                size="small"
                status="warning"
                onClick={() => callback(record, 'offline')}
              >
                {t['searchTable.columns.operations.offline']}
              </Button>
              <Button
                type="text"
                size="small"
                onClick={() => callback(record, 'view')}
              >
                {t['searchTable.columns.operations.view']}
              </Button>
            </>
          ) : (
            <>
              <Button
                type="text"
                size="small"
                onClick={() => callback(record, 'online')}
              >
                {t['searchTable.columns.operations.online']}
              </Button>
              <Button
                type="text"
                size="small"
                onClick={() => callback(record, 'update')}
              >
                {t['searchTable.columns.operations.update']}
              </Button>
              <Button
                type="text"
                status="danger"
                size="small"
                onClick={() => callback(record, 'delete')}
              >
                {t['searchTable.columns.operations.delete']}
              </Button>
            </>
          )}
        </div>
      ),
    },
  ];
}
