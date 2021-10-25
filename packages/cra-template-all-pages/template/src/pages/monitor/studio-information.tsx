import { Card, Typography, Form, Input, Button } from '@arco-design/web-react';
import React from 'react';
import useLocale from '../../utils/useLocale';

export default function StudioInformation() {
  const locale = useLocale();
  return (
    <Card bordered={false}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 16 }} heading={6}>
        {locale['monitor.title.studioInfo']}
      </Typography.Title>
      <Form layout="vertical">
        <Form.Item label={locale['monitor.studioInfo.label.studioTitle']} required>
          <Input placeholder={`王立群${locale['monitor.studioInfo.placeholder.studioTitle']}`} />
        </Form.Item>
        <Form.Item label={locale['monitor.studioInfo.label.onlineNotification']} required>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label={locale['monitor.studioInfo.label.studioCategory']} required>
          <Input.Search />
        </Form.Item>
        <Form.Item label={locale['monitor.studioInfo.label.studioCategory']} required>
          <Input.Search />
        </Form.Item>
      </Form>
      <Button type="primary">更新</Button>
    </Card>
  );
}
