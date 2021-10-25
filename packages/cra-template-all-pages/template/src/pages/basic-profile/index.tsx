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

import useLocale from '../../utils/useLocale';
import ProfileItem from './item';
import styles from './style/index.module.less';

function BasicProfile() {
  const locale = useLocale();
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
        <Breadcrumb.Item>{locale['menu.profile']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.profile.basic']}</Breadcrumb.Item>
      </Breadcrumb>
      <Card bordered={false}>
        <Grid.Row justify="space-between" align="center" style={{ marginBottom: 24 }}>
          <Grid.Col span={16}>
            <Typography.Title heading={6} style={{ margin: 0 }}>
              王力群{locale['basicProfile.title.form']}
            </Typography.Title>
          </Grid.Col>
          <Grid.Col span={8} style={{ textAlign: 'right' }}>
            <Space>
              <Button size="mini" type="primary">
                {locale['basicProfile.goBack']}
              </Button>
              <Button size="mini">{locale['basicProfile.cancel']}</Button>
            </Space>
          </Grid.Col>
        </Grid.Row>
        <Spin loading={loading} style={{ width: '100%' }}>
          <Steps current={data.status} lineless className={styles.steps}>
            <Steps.Step title={locale['basicProfile.steps.commit']} />
            <Steps.Step title={locale['basicProfile.steps.approval']} />
            <Steps.Step title={locale['basicProfile.steps.finish']} />
          </Steps>
          <ProfileItem
            title={locale['basicProfile.title.currentParams']}
            data={data}
            style={{ marginTop: 24 }}
          />
        </Spin>
        <Spin loading={preLoading} style={{ width: '100%' }}>
          <ProfileItem
            title={locale['basicProfile.title.originParams']}
            data={preData}
            style={{ marginTop: 24 }}
          />
        </Spin>
      </Card>
    </div>
  );
}

export default BasicProfile;
