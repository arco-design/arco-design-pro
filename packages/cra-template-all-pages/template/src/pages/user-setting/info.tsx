import {
  Form,
  Typography,
  Input,
  Button,
  Space,
  Avatar,
  Upload,
  Message,
  Select,
} from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';
import { IconCamera, IconPlus } from '@arco-design/web-react/icon';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReducerState } from '../../redux';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

export default function Info() {
  const locale = useLocale();
  const userInfo = useSelector((state: ReducerState) => state.global.userInfo);
  const formRef = useRef<FormInstance>();
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState('');

  function save(params) {
    setLoading(true);
    axios
      .post('/api/user/saveInfo', { data: params })
      .then(() => {
        Message.success(locale['userSetting.saveSuccess']);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onSaveBtnClick() {
    formRef.current.validate().then((values) => {
      save({
        ...values,
        avatar,
      });
    });
  }

  function onCancelBtnClick() {
    setInitialValue(userInfo);
  }

  function setInitialValue(values) {
    if (values) {
      setAvatar(values.avatar);
      formRef.current.setFieldsValue({
        ...values,
        avatar: [
          {
            uid: 1,
            url: values.avatar,
          },
        ],
      });
    }
  }

  useEffect(() => {
    if (userInfo) {
      setAvatar(userInfo.avatar);
      setInitialValue(userInfo);
    }
  }, [userInfo]);

  function onAvatarChange(_, file) {
    setAvatar(file.originFile ? URL.createObjectURL(file.originFile) : '');
  }

  return (
    <Form className={styles['info-form']} layout="vertical" ref={formRef}>
      <Typography.Title heading={6} style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }}>
        {locale['userSetting.title.basicInfo']}
      </Typography.Title>
      <Form.Item
        label={locale['userSetting.label.avatar']}
        field="avatar"
        rules={[{ required: true }]}
        triggerPropName="fileList"
      >
        <Upload showUploadList={false} onChange={onAvatarChange}>
          <Avatar size={64} triggerIcon={<IconCamera />} className={styles['info-avatar']}>
            {avatar ? <img src={avatar} /> : <IconPlus />}
          </Avatar>
        </Upload>
      </Form.Item>
      <Form.Item label={locale['userSetting.label.name']} field="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label={locale['userSetting.label.location']}
        field="location"
        rules={[{ required: true }]}
      >
        <Select>
          <Select.Option key="beijing" value="beijing">
            北京
          </Select.Option>
          <Select.Option key="shanghai" value="shanghai">
            上海
          </Select.Option>
          <Select.Option key="hangzhou" value="hangzhou">
            杭州
          </Select.Option>
          <Select.Option key="xiamen" value="xiamen">
            厦门
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label={locale['userSetting.label.introduction']} field="introduction">
        <Input.TextArea />
      </Form.Item>

      <Typography.Title heading={6}>{locale['userSetting.title.socialInfo']}</Typography.Title>
      <Form.Item label={locale['userSetting.label.personalWebsite']} field="personalWebsite">
        <Input />
      </Form.Item>
      <Form.Item label={locale['userSetting.label.personalWebsite']} field="personalWebsite">
        <Input />
      </Form.Item>
      <Space>
        <Button type="primary" loading={loading} onClick={onSaveBtnClick}>
          {locale['userSetting.save']}
        </Button>
        <Button onClick={onCancelBtnClick}>{locale['userSetting.cancel']}</Button>
      </Space>
    </Form>
  );
}
