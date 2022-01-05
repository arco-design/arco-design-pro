import React, { forwardRef } from 'react';
import { Button } from '@arco-design/web-react';
import styles from './style/icon-button.module.less';

function IconButton(props, ref) {
  const { icon, ...rest } = props;

  return (
    <Button
      ref={ref}
      className={styles['icon-button']}
      icon={icon}
      shape="circle"
      type="secondary"
      {...rest}
    />
  );
}

export default forwardRef(IconButton);
