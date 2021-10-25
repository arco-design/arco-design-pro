import React from 'react';
import { Link, Card } from '@arco-design/web-react';
import useLocale from '../../utils/useLocale';

function QuickOperation() {
  const locale = useLocale();

  return (
    <Card title={locale['workplace.docs']} bordered={false}>
      <Link style={{ display: 'block' }}>ArcoDesign Pro</Link>
      <Link style={{ display: 'block' }}>ArcoDesign Themes</Link>
      <Link style={{ display: 'block' }}>ArcoDesign Material</Link>
      <Link style={{ display: 'block' }}>ArcoDesign Plugins</Link>
    </Card>
  );
}

export default QuickOperation;
