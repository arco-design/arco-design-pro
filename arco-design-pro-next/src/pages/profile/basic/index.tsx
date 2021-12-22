import React, { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Card,
  Steps,
  Typography,
  Spin,
  Grid,
  Space,
  Button,
} from '@arco-design/web-react';
import axios from 'axios';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import ProfileItem from './item';
import styles from './style/index.module.less';
import './mock';

function BasicProfile() {
  const t = useLocale(locale);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ status: 1 });
  const [preLoading, setPreLoading] = useState(false);
  const [preData, setPreData] = useState({});

  function fetchData() {
    setLoading(true);
    axios
      .get('/api/basicProfile')
      .then((res) => {
        setData(res.data || {});
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function fetchPreData() {
    setPreLoading(true);
    axios
      .get('/api/basicProfile')
      .then((res) => {
        setPreData(res.data || {});
      })
      .finally(() => {
        setPreLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
    fetchPreData();
  }, []);

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{t['menu.profile']}</Breadcrumb.Item>
        <Breadcrumb.Item>{t['menu.profile.basic']}</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Grid.Row
          justify="space-between"
          align="center"
          style={{ marginBottom: 24 }}
        >
          <Grid.Col span={16}>
            <Typography.Title heading={6} style={{ margin: 0 }}>
              王力群{t['basicProfile.title.form']}
            </Typography.Title>
          </Grid.Col>
          <Grid.Col span={8} style={{ textAlign: 'right' }}>
            <Space>
              <Button size="mini" type="primary">
                {t['basicProfile.goBack']}
              </Button>
              <Button size="mini">{t['basicProfile.cancel']}</Button>
            </Space>
          </Grid.Col>
        </Grid.Row>
        <Spin loading={loading} style={{ width: '100%' }}>
          <Steps current={data.status} lineless className={styles.steps}>
            <Steps.Step title={t['basicProfile.steps.commit']} />
            <Steps.Step title={t['basicProfile.steps.approval']} />
            <Steps.Step title={t['basicProfile.steps.finish']} />
          </Steps>
          <ProfileItem
            title={t['basicProfile.title.currentParams']}
            data={data}
            style={{ marginTop: 24 }}
          />
        </Spin>
        <Spin loading={preLoading} style={{ width: '100%' }}>
          <ProfileItem
            title={t['basicProfile.title.originParams']}
            data={preData}
            style={{ marginTop: 24 }}
          />
        </Spin>
      </Card>
    </div>
  );
}

export default BasicProfile;
