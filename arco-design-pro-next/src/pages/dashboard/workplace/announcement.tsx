import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Card, Skeleton, Tag } from '@arco-design/web-react';
import useLocale from './locale/useLocale';
import styles from './style/announcement.module.less';

function Announcement() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const t = useLocale();

  const fetchData = () => {
    setLoading(true);
    axios
      .get('/api/workplace/announcement')
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function getTagColor(type) {
    switch (type) {
      case 'activity':
        return 'orangered';
      case 'info':
        return 'cyan';
      case 'notice':
        return 'arcoblue';
      default:
        return 'arcoblue';
    }
  }

  return (
    <Card
      title={t['workplace.announcement']}
      extra={<Link>{t['workplace.seeMore']}</Link>}
      headerStyle={{ borderBottom: 0 }}
    >
      <Skeleton loading={loading} text={{ rows: 5, width: '100%' }} animation>
        <div>
          {data.map((d) => (
            <div key={d.key} className={styles.item}>
              <Tag color={getTagColor(d.type)} size="small">
                {t[`workplace.${d.type}`]}
              </Tag>
              <span className={styles.link}>{d.content}</span>
            </div>
          ))}
        </div>
      </Skeleton>
    </Card>
  );
}

export default Announcement;
