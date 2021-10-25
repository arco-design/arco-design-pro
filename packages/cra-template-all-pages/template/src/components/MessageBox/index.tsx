import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { groupBy } from 'lodash';
import { Dropdown, Badge, Tabs, Menu, Avatar, Spin } from '@arco-design/web-react';
import {
  IconNotification,
  IconMessage,
  IconCustomerService,
  IconFile,
  IconDesktop,
} from '@arco-design/web-react/icon';

import useLocale from '../../utils/useLocale';

import MessageList, { MessageListType } from './list';
import styles from './style/index.module.less';

function DropContent() {
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [groupData, setGroupData] = useState<{ [key: string]: MessageListType }>({});
  const [sourceData, setSourceData] = useState<MessageListType>([]);

  function fetchSourceData(showLoading = true) {
    showLoading && setLoading(true);
    axios
      .get('/api/message/list')
      .then((res) => {
        setSourceData(res.data);
      })
      .finally(() => {
        showLoading && setLoading(false);
      });
  }

  function readMessage(data: MessageListType) {
    const ids = data.map((item) => item.id);
    axios
      .post('/api/message/read', {
        ids,
      })
      .then(() => {
        fetchSourceData();
      });
  }

  useEffect(() => {
    fetchSourceData();
  }, []);

  useEffect(() => {
    const groupData: { [key: string]: MessageListType } = groupBy(sourceData, 'type');
    setGroupData(groupData);
  }, [sourceData]);

  const tabList = [
    {
      key: 'message',
      title: locale['messageBox.tab.title.message'],
      titleIcon: <IconMessage />,
    },
    {
      key: 'notice',
      title: locale['messageBox.tab.title.notice'],
      titleIcon: <IconCustomerService />,
    },
    {
      key: 'approve',
      title: locale['messageBox.tab.title.approve'],
      titleIcon: <IconFile />,
      avatar: (
        <Avatar style={{ backgroundColor: '#0FC6C2' }}>
          <IconDesktop />
        </Avatar>
      ),
    },
  ];

  return (
    <Spin loading={loading} style={{ width: '100%' }}>
      <Tabs type="rounded" defaultActiveTab="message" destroyOnHide>
        {tabList.map((item) => {
          const { key, title, titleIcon, avatar } = item;
          const data = groupData[key] || [];
          const unReadData = data.filter((item) => !item.status);
          return (
            <Tabs.TabPane
              key={key}
              title={
                <span>
                  {titleIcon}
                  {title}
                  {unReadData.length ? `(${unReadData.length})` : ''}
                </span>
              }
            >
              <MessageList
                data={data}
                unReadData={unReadData}
                avatar={avatar}
                onItemClick={(item) => {
                  readMessage([item]);
                }}
                onAllBtnClick={(unReadData) => {
                  readMessage(unReadData);
                }}
              />
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </Spin>
  );
}

function MessageBox() {
  return (
    <Dropdown
      trigger="click"
      droplist={
        <Menu className={styles.messageBox}>
          <DropContent />
        </Menu>
      }
      position="br"
      triggerProps={{
        autoFitPosition: false,
      }}
    >
      <div className={styles.messageBoxTrigger}>
        <Badge count={9} dot>
          <IconNotification />
        </Badge>
      </div>
    </Dropdown>
  );
}

export default MessageBox;
