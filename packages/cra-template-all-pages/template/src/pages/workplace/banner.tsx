import React from 'react';
import { Typography, Grid, Statistic, Space } from '@arco-design/web-react';
import { IconHome } from '@arco-design/web-react/icon';
import { useSelector } from 'react-redux';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';
import { ReducerState } from '../../redux';

const { Title, Text } = Typography;
const { Row, Col } = Grid;

function Banner() {
  const userInfo = useSelector((state: ReducerState) => state.global.userInfo);
  const locale = useLocale();

  return (
    <Row className={styles.banner}>
      <Col span={8}>
        <Title heading={5} style={{ marginTop: 0 }}>
          {locale['workplace.welcome']}
        </Title>
        {userInfo && (
          <Text type="secondary">
            {userInfo.name}，{userInfo.email}
          </Text>
        )}
      </Col>
      <Col span={16} style={{ textAlign: 'right' }}>
        <Space size={30}>
          <Statistic
            title={locale['workplace.balance']}
            value={392.52}
            precision={2}
            prefix={<IconHome />}
            countUp
          />
          <Statistic
            title={locale['workplace.order.pending']}
            value={0}
            precision={2}
            prefix={<IconHome />}
          />
          <Statistic
            title={locale['workplace.order.pendingRenewal']}
            value={1}
            prefix={<IconHome />}
          />
        </Space>
      </Col>
    </Row>
  );
}

export default Banner;
