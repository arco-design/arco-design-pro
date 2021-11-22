import React from 'react';
import { Link, Card } from '@arco-design/web-react';
import useLocale from './locale/useLocale';

function QuickOperation() {
  const t = useLocale();

  return (
    <Card title={t['workplace.docs']} bordered={false}>
      <Link style={{ display: 'block' }}>ArcoDesign Pro</Link>
      <Link style={{ display: 'block' }}>ArcoDesign Themes</Link>
      <Link style={{ display: 'block' }}>ArcoDesign Material</Link>
      <Link style={{ display: 'block' }}>ArcoDesign Plugins</Link>
    </Card>
  );
}

export default QuickOperation;
