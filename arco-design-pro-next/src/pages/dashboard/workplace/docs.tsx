import React from 'react';
import { Link, Card } from '@arco-design/web-react';
import useLocale from './locale/useLocale';
import styles from './style/docs.module.less';

function QuickOperation() {
  const t = useLocale();

  return (
    <Card
      title={t['workplace.docs']}
      extra={<Link>{t['workplace.seeMore']}</Link>}
      bordered={false}
      headerStyle={{ borderBottom: 0 }}
    >
      <div className={styles.docs}>
        <Link className={styles.link}>Vue Pro</Link>
        <Link className={styles.link}>DesignLab</Link>
        <Link className={styles.link}>Materials</Link>
        <Link className={styles.link}>Plugins</Link>
      </div>
    </Card>
  );
}

export default QuickOperation;
