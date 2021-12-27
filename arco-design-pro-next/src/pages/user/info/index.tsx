import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid, Button, Result } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import UserInfoHeader from './header';
import styles from './style/index.module.less';
import './mock';
import { Card } from '@arco-design/web-react';
import MyProject from './my-projects';
import MyTeam from './my-team';
import LatestNews from './latest-news';

const { Title } = Typography;
const { Row, Col } = Grid;
function UserInfo() {
  const t = useLocale(locale);
  const userInfo = useSelector((state: any) => state.userInfo);
  if (!userInfo) return null;
  return (
    <div className={styles['container']}>
      <UserInfoHeader userInfo={userInfo} />
      <Row gutter={16}>
        <Col span={16}>
          <Card className={styles.wrapper}>
            <div className={styles['card-title-wrapper']}>
              <Title heading={6}>{t['userInfo.title.project']}</Title>
              <Button type="text">{t['userInfo.btn.more']}</Button>
            </div>
            <MyProject />
          </Card>
        </Col>
        <Col span={8}>
          <Card className={styles.wrapper}>
            <div
              className={styles['card-title-wrapper']}
              style={{ marginBottom: '5px' }}
            >
              <Title heading={6}>{t['userInfo.title.team']}</Title>
            </div>
            <MyTeam />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <Card className={styles.wrapper}>
            <div className={styles['card-title-wrapper']}>
              <Title heading={6}>{t['userInfo.title.news']}</Title>
              <Button type="text">{t['userInfo.btn.all']}</Button>
            </div>
            <LatestNews />
          </Card>
        </Col>
        <Col span={8}>
          <Card className={styles.wrapper}>
            <div className={styles['card-title-wrapper']}>
              <Title heading={6}>{t['userInfo.title.notice']}</Title>
            </div>
            <Result
              status="404"
              subTitle={t['userInfo.notice.empty']}
              style={{ paddingTop: '60px', paddingBottom: '130px' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default UserInfo;
