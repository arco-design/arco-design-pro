// 舆情分析
import React from 'react';

import { Statistic } from '@arco-design/web-react';
import { IconCode } from '@arco-design/web-react/icon';

import useLocale from '../../utils/useLocale';

import styles from './style/public-opinion.module.less';

function PublicOpinion() {
  const locale = useLocale();
  const data = [
    {
      title: locale['dataAnalysis.downstream'],
      value: 125670,
      unit: 'b',
      type: 'down',
    },
    {
      title: locale['dataAnalysis.downstream'],
      value: 125670,
      unit: 'b',
      type: 'down',
    },
    {
      title: locale['dataAnalysis.upstream'],
      value: 125670,
      unit: 'b',
      type: 'up',
    },
    {
      title: locale['dataAnalysis.downstream'],
      value: 125670,
      unit: 'b',
      type: 'down',
    },
    {
      title: locale['dataAnalysis.downstream'],
      value: 125670,
      unit: 'b',
      type: 'down',
    },
  ];

  return (
    <div className={styles.list}>
      {data.map((item, index) => (
        <div
          className={`${styles.box} ${
            item.type === 'up' ? styles['box--up'] : styles['box--down']
          }`}
          key={`${index}`}
          style={{ width: `${100 / data.length}%` }}
        >
          <div className={styles['box-inner']}>
            <Statistic
              title={item.title}
              value={item.value}
              groupSeparator
              prefix={
                <span className={styles.box__icon}>
                  <IconCode />
                </span>
              }
              suffix={item.unit}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PublicOpinion;
