import React from 'react';
import { Card, Grid, Typography } from '@arco-design/web-react';
import { IconRobot } from '@arco-design/web-react/icon';
import useLocale from './locale/useLocale';
import styles from './style/operation.module.less';

const { Row, Col } = Grid;

const links = [
  'workplace.test.performance',
  'workplace.test.stability',
  'workplace.test.unit',
  'workplace.test.release',
  'workplace.test.security',
  'workplace.test.memory',
  'workplace.crontab',
  'workplace.dataManagement',
  'workplace.log',
];

function QuickOperation() {
  const t = useLocale();

  return (
    <Card title={t['workplace.quick.operation']} bordered={false}>
      <div style={{ marginBottom: '-1em' }}>
        <Row gutter={4}>
          {links.map((link, index) => (
            <Col key={index} span={8} className={styles.wrapper}>
              <div className={styles.icon}>
                <IconRobot />
              </div>
              <Typography.Paragraph className={styles.text}>{t[link]}</Typography.Paragraph>
            </Col>
          ))}
        </Row>
      </div>
    </Card>
  );
}

export default QuickOperation;
