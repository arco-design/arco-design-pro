import React from 'react';
import { Card, Grid, Typography } from '@arco-design/web-react';
import { IconFile, IconArrowRight } from '@arco-design/web-react/icon';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

const { Row, Col } = Grid;

const Content = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ display: 'flex', alignItems: 'center', color: '#1D2129' }}>
        <IconFile style={{ paddingRight: 8 }} />
        <Typography.Text>Project Name</Typography.Text>
      </span>
      <IconArrowRight />
    </div>
  );
};

function RecentlyVisited() {
  const locale = useLocale();

  return (
    <Card
      title={locale['workplace.recently.visited']}
      hoverable
      bordered={false}
      className={styles.panel}
    >
      <Row gutter={8}>
        <Col span={12} style={{ marginBottom: 8 }}>
          <Card hoverable>
            <Content />
          </Card>
        </Col>
        <Col span={12} style={{ marginBottom: 8 }}>
          <Card hoverable>
            <Content />
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable>
            <Content />
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable>
            <Content />
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default RecentlyVisited;
