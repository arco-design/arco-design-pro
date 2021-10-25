import { Button, Card, Typography, Space } from '@arco-design/web-react';
import { IconArrowRight, IconStop, IconSwap, IconTags } from '@arco-design/web-react/icon';
import React from 'react';
import useLocale from '../../utils/useLocale';

export default function QuickOperation() {
  const locale = useLocale();
  return (
    <Card bordered={false}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 16 }} heading={6}>
        {locale['monitor.title.quickOperation']}
      </Typography.Title>
      <Space direction="vertical" style={{ width: '100%' }} size={10}>
        <Button long icon={<IconTags />}>
          {locale['monitor.quickOperation.changeClarity']}
        </Button>
        <Button long icon={<IconSwap />}>
          {locale['monitor.quickOperation.switchStream']}
        </Button>
        <Button long icon={<IconStop />}>
          {locale['monitor.quickOperation.removeClarity']}
        </Button>
        <Button long icon={<IconArrowRight />}>
          {locale['monitor.quickOperation.pushFlowGasket']}
        </Button>
      </Space>
    </Card>
  );
}
