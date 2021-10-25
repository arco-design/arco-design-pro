import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import {
  Collapse,
  Form,
  Input,
  Select,
  Alert,
  Switch,
  Button,
  Cascader,
} from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';

import { ReducerState } from '../../redux';
import { UPDATE_FORM, GO_NEXT, UPDATE_ACTIVE_KEYS } from './redux/actionTypes';
import useLocale from '../../utils/useLocale';

import styles from './style/index.module.less';

function BaseInfo() {
  const locale = useLocale();
  const state = useSelector((state: ReducerState) => state.stepForm);
  const dispatch = useDispatch();
  const { data, activeKeys } = state;
  const formRef = useRef<FormInstance>();
  const [clusterOptions, setClusterOptions] = useState([]);
  const [lineOptions, setLineOptions] = useState([]);

  const fetchClusterOptions = () => {
    axios.get(`/api/clusterList`).then((res) => {
      setClusterOptions(res.data || []);
    });
  };

  const fetchLineOptions = (cluster) => {
    axios
      .get('/api/lineList', {
        params: {
          cluster,
        },
      })
      .then((res) => {
        setLineOptions(res.data || []);
        // 默认选中第一个
        if (!data.lineName && res.data.length && formRef.current) {
          formRef.current.setFieldValue('lineName', res.data[0].value);
        }
      });
  };

  const onCollapseChange = (_key, activeKeys) => {
    dispatch({ type: UPDATE_ACTIVE_KEYS, payload: { activeKeys } });
  };

  const onClusterChange = (value) => {
    const cluster = Array.isArray(value) && value[value.length - 1];
    if (formRef.current) {
      formRef.current.setFieldValue('lineName', undefined);
    }
    if (cluster) {
      fetchLineOptions(cluster);
    } else {
      setLineOptions([]);
    }
  };

  const onNextClick = () => {
    formRef.current.validate().then(() => {
      dispatch({ type: GO_NEXT });
    });
  };

  useEffect(() => {
    fetchClusterOptions();
  }, []);

  useEffect(() => {
    formRef.current.setFieldsValue(data);
    data.cluster && fetchLineOptions(data.cluster[0]);
  }, [data]);

  useEffect(() => {
    return () => {
      const formData = formRef.current?.getFieldsValue() || {};
      dispatch({ type: UPDATE_FORM, payload: { data: formData } });
    };
  }, []);

  return (
    <Form className={styles.form} ref={formRef}>
      <Collapse bordered={false} activeKey={activeKeys} onChange={onCollapseChange}>
        <Collapse.Item name="baseConfig" header={locale['stepForm.collapse.title.base']}>
          <div className={styles['form-content']}>
            <Form.Item
              label={locale['stepForm.form.label.name']}
              field="name"
              rules={[
                { required: true, message: locale['stepForm.form.error.name.required'] },
                {
                  match: /^[a-zA-z0-9][-a-zA-z0-9]{0,62}(\.[a-zA-z0-9][-a-zA-z0-9]{0,62})+$/,
                  message: locale['stepForm.form.error.name.pattern'],
                },
              ]}
            >
              <Input placeholder={locale['stepForm.placeholder.name']} />
            </Form.Item>
            <Form.Item
              label={locale['stepForm.form.label.purpose']}
              field="purpose"
              rules={[{ required: true, message: locale['stepForm.form.error.purpose.required'] }]}
            >
              <Input placeholder={locale['stepForm.placeholder.purpose']} />
            </Form.Item>
            <Form.Item label={locale['stepForm.form.label.cluster']} field="cluster">
              <Cascader
                placeholder={locale['stepForm.placeholder.cluster']}
                options={clusterOptions}
                onChange={onClusterChange}
              />
            </Form.Item>
          </div>
        </Collapse.Item>
        <Collapse.Item name="advanceConfig" header={locale['stepForm.collapse.title.highLevel']}>
          <Alert closable banner type="warning" content={locale['stepForm.alert.highLevel']} />
          <div className={styles['form-content']}>
            <Form.Item label={locale['stepForm.form.label.type']} field="type">
              <Select placeholder={locale['stepForm.placeholder.type']}>
                <Select.Option value="web">{locale['stepForm.label.type.web']}</Select.Option>
                <Select.Option value="api">{locale['stepForm.label.type.api']}</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={locale['stepForm.form.label.dns']}
              field="dns"
              triggerPropName="checked"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label={locale['stepForm.form.label.subDomain']}
              field="subDomain"
              triggerPropName="checked"
            >
              <Switch />
            </Form.Item>
            <Form.Item label={locale['stepForm.form.label.lineName']} field="lineName">
              <Select placeholder={locale['stepForm.placeholder.lineName']}>
                {lineOptions.map((option) => (
                  <Select.Option value={option.value} key={`${option.value}`}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </Collapse.Item>
      </Collapse>
      <div className={styles.actions}>
        <Button type="primary" onClick={onNextClick}>
          {locale['stepForm.button.next']}
        </Button>
      </div>
    </Form>
  );
}

export default BaseInfo;
