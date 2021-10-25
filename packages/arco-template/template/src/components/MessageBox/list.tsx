import React, { ReactNode } from 'react';
import { List, Avatar, Typography, Button, Space } from '@arco-design/web-react';

import useLocale from '../../utils/useLocale';

export interface MessageItemData {
  id: string;
  title: string;
  subTitle: string;
  avatar: string;
  content: string;
  time: string;
  status: number;
}

export type MessageListType = MessageItemData[];

interface MessageListProps {
  data: MessageItemData[];
  unReadData: MessageItemData[];
  avatar?: string | ReactNode;
  onItemClick?: (item: MessageItemData, index: number) => void;
  onAllBtnClick?: (unReadData: MessageItemData[], data: MessageItemData[]) => void;
}

function MessageList(props: MessageListProps) {
  const locale = useLocale();
  const { data, unReadData, avatar: defaultAvatar } = props;

  function onItemClick(item: MessageItemData, index: number) {
    if (item.status) return;
    props.onItemClick && props.onItemClick(item, index);
  }

  function onAllBtnClick() {
    props.onAllBtnClick && props.onAllBtnClick(unReadData, data);
  }

  return (
    <List
      bordered={false}
      footer={
        unReadData.length ? (
          <div style={{ textAlign: 'center' }}>
            <Button type="text" onClick={onAllBtnClick}>
              {locale['messageBox.allRead']}
            </Button>
          </div>
        ) : null
      }
    >
      {data.map((item, index) => (
        <List.Item
          key={item.id}
          actionLayout="vertical"
          style={{
            opacity: item.status ? 0.5 : 1,
          }}
        >
          <div
            style={{
              cursor: 'pointer',
            }}
            onClick={() => {
              onItemClick(item, index);
            }}
          >
            <List.Item.Meta
              avatar={
                item.avatar ? (
                  <Avatar shape="circle">
                    <img src={item.avatar} />
                  </Avatar>
                ) : (
                  defaultAvatar
                )
              }
              title={
                <Space size={4}>
                  <span>{item.title}</span>
                  <Typography.Text type="secondary">{item.subTitle}</Typography.Text>
                </Space>
              }
              description={
                <div>
                  <div>{item.content}</div>
                  <Typography.Text type="secondary">{item.time}</Typography.Text>
                </div>
              }
            />
          </div>
        </List.Item>
      ))}
    </List>
  );
}

export default MessageList;
