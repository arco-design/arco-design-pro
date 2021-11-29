import { Avatar, Link, List, Typography } from '@arco-design/web-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useLocale from './locale/useLocale';
import styles from './style/index.module.less';

export default function LatestActivity() {
  const t = useLocale();
  const [activityList, setActivityList] = useState([]);

  function fetchActivityList() {
    axios.get('/api/user/latestActivity').then((res) => {
      setActivityList(res.data || []);
    });
  }

  useEffect(() => {
    fetchActivityList();
  }, []);

  return (
    <div>
      <div className={styles['latest-activity-header']}>
        <Typography.Title heading={6}>
          {t['userInfo.title.latestActivity']}
        </Typography.Title>
        <Link>{t['userInfo.showMore']}</Link>
      </div>
      <List
        dataSource={activityList}
        render={(activity) => (
          <List.Item key={activity.id} actionLayout="horizontal">
            <List.Item.Meta
              avatar={
                <Avatar>
                  <img src={activity.avatar} />
                </Avatar>
              }
              title={activity.title}
              description={activity.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
