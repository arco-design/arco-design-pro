import React from 'react';
import { Result, Button } from '@arco-design/web-react';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

function Exception403() {
  const locale = useLocale();

  return (
    <div className={styles.container}>
      <Result
        className={styles.result}
        status="403"
        subTitle={locale['exception.result.403.description']}
        extra={
          <Button key="back" type="primary">
            {locale['exception.result.403.back']}
          </Button>
        }
      />
    </div>
  );
}

export default Exception403;
