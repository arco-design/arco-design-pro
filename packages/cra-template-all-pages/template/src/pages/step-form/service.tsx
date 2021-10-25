import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Form,
  Grid,
  Input,
  Link,
  Message,
  Select,
  Typography,
} from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';
import axios from 'axios';

import { ReducerState } from '../../redux';
import { UPDATE_FORM, GO_PREV, GO_NEXT } from './redux/actionTypes';
import useLocale from '../../utils/useLocale';

import styles from './style/index.module.less';

function Service() {
  const locale = useLocale();
  const state = useSelector((state: ReducerState) => state.stepForm);
  const dispatch = useDispatch();
  const { data } = state;
  const formRef = useRef<FormInstance>();
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setLoading(true);
    const formData = formRef.current.getFieldsValue();
    axios
      .post('/api/domainApply', {
        data: {
          ...data,
          ...formData,
        },
      })
      .finally(() => {
        setLoading(false);
      })
      .then(() => {
        dispatch({ type: GO_NEXT });
      })
      .catch((error) => {
        Message.error(error.message);
      });
  };

  const onSubmitClick = () => {
    formRef.current.validate().then(() => {
      submit();
    });
  };

  useEffect(() => {
    formRef.current.setFieldsValue(data);
  }, [data]);

  useEffect(() => {
    return () => {
      const formData = formRef.current?.getFieldsValue() || {};
      dispatch({ type: UPDATE_FORM, payload: { data: formData } });
    };
  }, []);

  return (
    <Form ref={formRef} className={styles.form} labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 16 }} heading={6}>
        {locale['stepForm.form.title.upstream']}
      </Typography.Title>
      <Form.Item label="P.S.M" extra={locale['stepForm.form.extra.psm']} required>
        <Grid.Row align="center" justify="space-around" gutter={8}>
          <Grid.Col span={16}>
            <Form.Item
              field="psm"
              rules={[{ required: true, message: locale['stepForm.form.error.psm.required'] }]}
              style={{ marginBottom: 0 }}
            >
              <Input placeholder="Product.Subsystem.Module" />
            </Form.Item>
          </Grid.Col>
          <Grid.Col span={8}>
            <Link>{locale['stepForm.link.psmDefine']}</Link>
          </Grid.Col>
        </Grid.Row>
      </Form.Item>
      <Form.Item label={locale['stepForm.form.label.strategy']}>
        <Grid.Row align="center" justify="space-around" gutter={8}>
          <Grid.Col span={16}>
            <Form.Item field="strategy" style={{ marginBottom: 0 }}>
              <Select placeholder={locale['stepForm.placeholder.strategy']}>
                <Select.Option value="local">LOCAL</Select.Option>
                <Select.Option value="all">ALL</Select.Option>
              </Select>
            </Form.Item>
          </Grid.Col>
          <Grid.Col span={8}>
            <Link>{locale['stepForm.link.selectStrategy']}</Link>
          </Grid.Col>
        </Grid.Row>
      </Form.Item>
      <div className={styles.actions}>
        <Button
          type="secondary"
          onClick={() => {
            dispatch({ type: GO_PREV });
          }}
        >
          {locale['stepForm.button.prev']}
        </Button>
        <Button loading={loading} type="primary" onClick={onSubmitClick}>
          {locale['stepForm.button.submit']}
        </Button>
      </div>
    </Form>
  );
}

export default Service;
