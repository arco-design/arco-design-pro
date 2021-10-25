import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumb, Spin, Steps } from '@arco-design/web-react';
import axios from 'axios';

import BaseInfo from './base-info';
import Service from './service';
import Success from './success';
import { ReducerState } from '../../redux';
import { UPDATE_FORM, UPDATE_LOADING } from './redux/actionTypes';
import useLocale from '../../utils/useLocale';

import styles from './style/index.module.less';

function StepForm() {
  const locale = useLocale();
  const state = useSelector((state: ReducerState) => state.stepForm);
  const dispatch = useDispatch();
  const { loading, step } = state;
  const fetchData = () => {
    axios
      .get('/api/stepForm')
      .then((res) => {
        dispatch({ type: UPDATE_FORM, payload: { data: res.data || {} } });
      })
      .finally(() => {
        dispatch({ type: UPDATE_LOADING, payload: { loading: false } });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{locale['menu.form']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.form.step']}</Breadcrumb.Item>
      </Breadcrumb>
      <Spin loading={loading} style={{ width: '100%' }}>
        <div className={styles.wrapper}>
          <Steps labelPlacement="vertical" className={styles.steps} current={step}>
            <Steps.Step
              title={locale['stepForm.step.title.baseInfo']}
              description={locale['stepForm.step.subTitle.baseInfo']}
            />
            <Steps.Step
              title={locale['stepForm.step.title.target']}
              description={locale['stepForm.step.subTitle.target']}
            />
            <Steps.Step
              title={locale['stepForm.step.title.finish']}
              description={locale['stepForm.step.subTitle.finish']}
            />
          </Steps>
          {step === 1 && <BaseInfo />}
          {step === 2 && <Service />}
          {step === 3 && <Success />}
        </div>
      </Spin>
    </div>
  );
}

export default StepForm;
