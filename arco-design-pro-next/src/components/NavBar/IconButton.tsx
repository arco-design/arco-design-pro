import React, { forwardRef } from 'react';
import { Button } from '@arco-design/web-react';

function IconButton(props, ref) {
  const { icon, ...rest } = props;

  return (
    <Button
      ref={ref}
      style={{
        fontSize: 16,
        border: '1px solid var(--color-border-2)',
        verticalAlign: '-1px',
      }}
      icon={icon}
      shape="circle"
      type="secondary"
      {...rest}
    />
  );
}

export default forwardRef(IconButton);
