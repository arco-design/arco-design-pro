import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Card, Typography, Space, Link } from '@arco-design/web-react';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

export default function LatestActivity() {
  const locale = useLocale();
  const [projectList, setProjectList] = useState([]);

  function fetchProjectList() {
    axios.get('/api/user/latestProjectList').then((res) => {
      setProjectList(res.data || []);
    });
  }

  useEffect(() => {
    fetchProjectList();
  }, []);

  return (
    <div>
      <div className={styles['latest-project-header']}>
        <Typography.Title heading={6} className={styles['latest-project-title']}>
          {locale['userInfo.title.latestProject']}
        </Typography.Title>
        <Link>{locale['userInfo.showMore']}</Link>
      </div>
      <div className={styles['latest-project-list']}>
        {projectList.map((project) => (
          <div
            key={project.id}
            className={styles['latest-project-item']}
            style={{ width: `${100 / projectList.length}%` }}
          >
            <Card>
              <Space direction="vertical">
                <Typography.Text>{project.name}</Typography.Text>
                <Typography.Text type="secondary">{project.description}</Typography.Text>
                <Avatar.Group size={0}>
                  {project.contributors.map((contributor, index) => (
                    <Avatar key={`${index}`} size={32}>
                      <img src={contributor.avatar} />
                    </Avatar>
                  ))}
                </Avatar.Group>
              </Space>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
