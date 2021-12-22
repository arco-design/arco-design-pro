import React from 'react';
import { Typography, Badge } from '@arco-design/web-react';
import styles from '../style/chart.module.less';

const { Text } = Typography;
interface TooltipProps {
  title: string;
  data: {
    name: string;
    value: string;
    color: string;
  }[];
}

function CustomTooltip(props: TooltipProps) {
  return (
    <div className={styles['customer-tooltip']}>
      <div className={styles['customer-tooltip-title']}>
        <Text bold>{props.title}</Text>
      </div>
      <div>
        {props.data.map((item, index) => (
          <div className={styles['customer-tooltip-item']} key={index}>
            <div>
              <Badge color={item.color} />
              {item.name}
            </div>
            <div>
              <Text bold>{item.value} %</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomTooltip;
