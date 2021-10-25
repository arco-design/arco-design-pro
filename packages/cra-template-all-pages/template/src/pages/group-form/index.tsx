import React, { useState, useRef } from 'react';
import {
  Typography,
  Card,
  Form,
  Select,
  Input,
  Grid,
  Space,
  Button,
  Message,
  Breadcrumb,
} from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';

import axios from 'axios';
import useLocale from '../../utils/useLocale';

import styles from './style/index.module.less';

function GroupForm() {
  const locale = useLocale();
  const formRef = useRef<FormInstance>();
  const [loading, setLoading] = useState(false);

  function submit(data) {
    setLoading(true);
    axios
      .post('/api/groupForm', {
        data,
      })
      .then(() => {
        Message.success(locale['groupForm.submitSuccess']);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onSubmitClick() {
    formRef.current.validate().then((values) => {
      submit(values);
    });
  }

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{locale['menu.form']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.form.group']}</Breadcrumb.Item>
      </Breadcrumb>
      <Card bordered={false}>
        <Form layout="vertical" ref={formRef}>
          <Typography.Title heading={6} style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }}>
            {locale['groupForm.title.video']}
          </Typography.Title>
          <Grid.Row gutter={80}>
            <Grid.Col span={8}>
              <Form.Item label={locale['groupForm.form.label.video.mode']} field="video.mode">
                <Select placeholder={locale['groupForm.placeholder.video.mode']}>
                  <Select.Option value="custom">自定义</Select.Option>
                  <Select.Option value="mode1">模式1</Select.Option>
                  <Select.Option value="mode2">模式2</Select.Option>
                </Select>
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.video.acquisition.resolution']}
                field="video.acquisition.resolution"
              >
                <Select placeholder={locale['groupForm.placeholder.video.acquisition.resolution']}>
                  <Select.Option value="resolution1">分辨率1</Select.Option>
                  <Select.Option value="resolution2">分辨率2</Select.Option>
                  <Select.Option value="resolution3">分辨率3</Select.Option>
                </Select>
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.video.acquisition.frameRate']}
                field="video.acquisition.frameRate"
              >
                <Input
                  placeholder={locale['groupForm.placeholder.video.acquisition.frameRate']}
                  addAfter="fps"
                />
              </Form.Item>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row gutter={80}>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.video.encoding.resolution']}
                field="video.encoding.resolution"
              >
                <Select placeholder={locale['groupForm.placeholder.video.encoding.resolution']}>
                  <Select.Option value="resolution1">分辨率1</Select.Option>
                  <Select.Option value="resolution2">分辨率2</Select.Option>
                  <Select.Option value="resolution3">分辨率3</Select.Option>
                </Select>
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.video.encoding.rate.min']}
                field="video.encoding.rate.min"
              >
                <Input
                  placeholder={locale['groupForm.placeholder.video.encoding.rate.min']}
                  addAfter="bps"
                />
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.video.encoding.rate.max']}
                field="video.encoding.rate.max"
              >
                <Input
                  placeholder={locale['groupForm.placeholder.video.encoding.rate.max']}
                  addAfter="bps"
                />
              </Form.Item>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row gutter={80}>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.video.encoding.rate.default']}
                field="video.encoding.rate.default"
              >
                <Input
                  placeholder={locale['groupForm.placeholder.video.encoding.rate.default']}
                  addAfter="bps"
                />
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.video.encoding.frameRate']}
                field="video.encoding.frameRate"
              >
                <Input
                  placeholder={locale['groupForm.placeholder.video.encoding.frameRate']}
                  addAfter="fps"
                />
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.video.encoding.profile']}
                field="video.encoding.profile"
              >
                <Input
                  placeholder={locale['groupForm.placeholder.video.encoding.profile']}
                  addAfter="bps"
                />
              </Form.Item>
            </Grid.Col>
          </Grid.Row>

          <Typography.Title heading={6} style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }}>
            {locale['groupForm.title.audio']}
          </Typography.Title>
          <Grid.Row gutter={80}>
            <Grid.Col span={8}>
              <Form.Item label={locale['groupForm.form.label.audio.mode']} field="audio.mode">
                <Select placeholder={locale['groupForm.placeholder.audio.mode']}>
                  <Select.Option value="custom">自定义</Select.Option>
                  <Select.Option value="mode1">模式1</Select.Option>
                  <Select.Option value="mode2">模式2</Select.Option>
                </Select>
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.audio.acquisition.channels']}
                field="audio.acquisition.channels"
              >
                <Select placeholder={locale['groupForm.placeholder.audio.acquisition.channels']}>
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                  <Select.Option value="3">3</Select.Option>
                </Select>
              </Form.Item>
            </Grid.Col>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.audio.encoding.rate']}
                field="audio.encoding.rate"
              >
                <Input
                  placeholder={locale['groupForm.placeholder.audio.encoding.rate']}
                  addAfter="bps"
                />
              </Form.Item>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row gutter={80}>
            <Grid.Col span={8}>
              <Form.Item
                label={locale['groupForm.form.label.audio.encoding.profile']}
                field="audio.encoding.profile"
              >
                <Input
                  placeholder={locale['groupForm.placeholder.audio.encoding.profile']}
                  addAfter="fps"
                />
              </Form.Item>
            </Grid.Col>
          </Grid.Row>

          <Typography.Title heading={6} style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }}>
            {locale['groupForm.title.approvers']}
          </Typography.Title>
          <Form.Item label={locale['groupForm.form.label.approvers']} field="audio.approvers">
            <Input.TextArea placeholder={locale['groupForm.placeholder.approvers']} />
          </Form.Item>

          <div className={styles.actions}>
            <Space>
              <Button type="primary" onClick={onSubmitClick} loading={loading}>
                {locale['groupForm.submit']}
              </Button>
              <Button>{locale['groupForm.cancel']}</Button>
            </Space>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default GroupForm;
