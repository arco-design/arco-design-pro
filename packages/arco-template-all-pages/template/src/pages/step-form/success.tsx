import React from 'react';
import { useDispatch } from 'react-redux';

import { Result, Button } from '@arco-design/web-react';

import { GO } from './redux/actionTypes';
import useLocale from '../../utils/useLocale';

function Success() {
  const locale = useLocale();
  const dispatch = useDispatch();

  return (
    <Result
      status="success"
      title={locale['stepForm.success.title']}
      subTitle={locale['stepForm.success.subTitle']}
      extra={[
        <Button
          key="again"
          type="secondary"
          style={{ marginRight: 16 }}
          onClick={() => {
            dispatch({ type: GO, payload: { step: 1 } });
          }}
        >
          {locale['stepForm.button.again']}
        </Button>,
        <Button key="view" type="primary">
          {locale['stepForm.button.view']}
        </Button>,
      ]}
    />
  );
}

export default Success;
