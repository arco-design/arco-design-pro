import React from 'react';
import { Card, Link } from '@arco-design/web-react';
import useLocale from './locale/useLocale';
import styles from './style/index.module.less';

function RecentlyProjects() {
  const t = useLocale();

  return (
    <Card
      title={t['workplace.recently.projects']}
      hoverable
      bordered={false}
      className={styles.panel}
      extra={<Link>{t['workplace.allProject']}</Link>}
    >
      <Card bordered={false}>
        {Array(4)
          .fill(null)
          .map((_, index) => {
            return (
              <Card.Grid key={index} hoverable style={{ width: '50%' }}>
                <Card title="Arco Design" bordered={false}>
                  Arco Design Team
                </Card>
              </Card.Grid>
            );
          })}
      </Card>
    </Card>
  );
}

export default RecentlyProjects;
