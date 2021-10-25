import React from 'react';
import { Grid, Statistic, Space } from '@arco-design/web-react';
import useLocale from '../../utils/useLocale';
import Banner from './banner';
import QuickOperation from './quick-operation';
import Docs from './docs';
import Carousel from './carousel';
import TeamInfo from './team-info';
import ProjectProgress from './project-progress';
import RecentlyVisited from './recently-visited';
import RecentlyProjects from './recently-projects';
import Record from './record';
import styles from './style/index.module.less';

const { Row, Col } = Grid;

function Workplace() {
  const locale = useLocale();

  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.content}>
        <div className={styles.left}>
          <Row>
            <Col span={24} className={styles.panel} style={{ padding: 16 }}>
              <Row>
                <Col span={6}>
                  <Statistic
                    title={locale['workplace.encodeTime']}
                    value={3735}
                    suffix={locale['workplace.minute']}
                  />
                </Col>
                <Col span={6}>
                  <Statistic title={locale['workplace.upstream']} value={124567} suffix="GB" />
                </Col>
                <Col span={6}>
                  <Statistic title={locale['workplace.downstream']} value={24335} suffix="GB" />
                </Col>
                <Col span={6}>
                  <Statistic title={locale['workplace.overview']} value={145652} suffix="GB" />
                </Col>
              </Row>
            </Col>
            <Col span={12} style={{ paddingRight: 12 }}>
              <TeamInfo />
              <ProjectProgress />
              <RecentlyVisited />
            </Col>
            <Col span={12}>
              <RecentlyProjects />
              <Record />
            </Col>
          </Row>
        </div>
        <div className={styles.right}>
          <Space style={{ width: '100%' }} direction="vertical" size={12}>
            <QuickOperation />
            <Carousel />
            <Docs />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Workplace;
