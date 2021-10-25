import React from 'react';
import {
  Card,
  Typography,
  Grid,
  Tabs,
  Space,
  Input,
  Radio,
  Spin,
  Result,
  Avatar,
  Tag,
  Statistic,
  Divider,
  Breadcrumb,
} from '@arco-design/web-react';
import { IconMenu, IconApps } from '@arco-design/web-react/icon';

import useLocale from '../../utils/useLocale';
import useRequest from './useRequest';
import BlockService from './block-service';
import BlockDocs from './block-docs';

import styles from './style/index.module.less';

export default () => {
  const locale = useLocale();
  const [recentLoading, resentData] = useRequest('/api/cardList/service/recent', []);
  const [devLoading, devData] = useRequest('/api/cardList/service/dev', []);
  const [docLoading, docData] = useRequest('/api/cardList/docs', []);

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{locale['menu.list']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.list.cardList']}</Breadcrumb.Item>
      </Breadcrumb>
      <Grid.Row gutter={20} align="stretch">
        <Grid.Col span={18}>
          <Card bordered={false}>
            <Grid.Row justify="space-between">
              <Grid.Col span={14}>
                <Tabs defaultActiveTab="1" type="rounded">
                  <Tabs.TabPane key="1" title={locale['cardList.tab.title.all']} />
                  <Tabs.TabPane key="2" title={locale['cardList.tab.title.test']} />
                  <Tabs.TabPane key="3" title={locale['cardList.tab.title.develop']} />
                  <Tabs.TabPane key="4" title={locale['cardList.tab.title.network']} />
                  <Tabs.TabPane key="5" title={locale['cardList.tab.title.other']} />
                </Tabs>
              </Grid.Col>
              <Grid.Col span={10}>
                <Space style={{ justifyContent: 'flex-end', width: '100%' }}>
                  <Radio.Group defaultValue="grid" type="button">
                    <Radio value="list">
                      <IconMenu />
                    </Radio>
                    <Radio value="grid">
                      <IconApps />
                    </Radio>
                  </Radio.Group>
                  <Input.Search
                    placeholder={locale['cardList.searchInput.placeholder']}
                    style={{ width: 240 }}
                  />
                </Space>
              </Grid.Col>
            </Grid.Row>
            <Spin loading={recentLoading} style={{ width: '100%' }}>
              <BlockService
                title={locale['cardList.block.title.resentUsed']}
                data={resentData}
                style={{ marginTop: 24 }}
              />
            </Spin>
            <Spin loading={devLoading} style={{ width: '100%' }}>
              <BlockService
                title={locale['cardList.block.title.developTools']}
                data={devData}
                style={{ marginTop: 24 }}
              />
            </Spin>
            <Spin loading={docLoading} style={{ width: '100%' }}>
              <BlockDocs
                title={locale['cardList.block.title.docs']}
                data={docData}
                style={{ marginTop: 24 }}
              />
            </Spin>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <div className={styles['right-content']}>
            <div style={{ marginBottom: 20 }} className={styles['right-content__item']}>
              <Card bordered={false}>
                <Space>
                  <Avatar>
                    <img src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" />
                  </Avatar>
                  <Card.Meta
                    title={
                      <div>
                        <span>王力群</span>
                        <Tag color="green" style={{ marginLeft: 8, verticalAlign: 'bottom' }}>
                          已实名
                        </Tag>
                      </div>
                    }
                    description="wangliqun@arco.design"
                  />
                </Space>
              </Card>
              <Divider style={{ margin: 0 }} />
              <Card bordered={false}>
                <div className={styles['statistic-list']}>
                  <Statistic
                    className={styles['statistic-list__item']}
                    title={locale['cardList.statistic.enable']}
                    value={3}
                  />
                  <Statistic
                    className={styles['statistic-list__item']}
                    title={locale['cardList.statistic.disable']}
                    value={1}
                  />
                  <Statistic
                    className={styles['statistic-list__item']}
                    title={locale['cardList.statistic.applicationNum']}
                    value={1}
                  />
                </div>
              </Card>
            </div>
            <Card bordered={false} className={styles['right-content__item']}>
              <Typography.Title style={{ marginTop: 0, marginBottom: 16 }} heading={6}>
                {locale['cardList.tab.title.announcement']}
              </Typography.Title>
              <Result status="404" subTitle={locale['cardList.announcement.noData']} />
            </Card>
          </div>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
};
