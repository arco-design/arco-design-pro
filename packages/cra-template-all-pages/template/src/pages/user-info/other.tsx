import { List, Typography } from '@arco-design/web-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './style/index.module.less';

export default function OtherList() {
  const [list, setList] = useState([]);

  function fetchList() {
    axios.get('/api/user/projectAndTeamList').then((res) => {
      setList(res.data || []);
    });
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className={styles['other-wrapper']}>
      <List bordered={false}>
        {list.map((item) => (
          <List.Item key={item.id}>
            <Typography.Text>{item.content}</Typography.Text>
          </List.Item>
        ))}
      </List>
    </div>
  );
}
