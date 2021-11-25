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
import useLocale from './locale/useLocale';
import styles from './style/index.module.less';

export default function Info() {
  const t = useLocale();
  const userInfo = useSelector((state: any) => state.userInfo);
  const formRef = useRef<FormInstance>();
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState('');

  function save(params) {
    setLoading(true);
    axios
      .post('/api/user/saveInfo', { data: params })
      .then(() => {
        Message.success(t['userSetting.saveSuccess']);
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
      <Typography.Title
        heading={6}
        style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }}
      >
        {t['userSetting.title.basicInfo']}
      </Typography.Title>
      <Form.Item
        label={t['userSetting.label.avatar']}
        field="avatar"
        rules={[{ required: true }]}
        triggerPropName="fileList"
      >
        <Upload showUploadList={false} onChange={onAvatarChange}>
          <Avatar
            size={64}
            triggerIcon={<IconCamera />}
            className={styles['info-avatar']}
          >
            {avatar ? <img src={avatar} /> : <IconPlus />}
          </Avatar>
        </Upload>
      </Form.Item>
      <Form.Item
        label={t['userSetting.label.name']}
        field="name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t['userSetting.label.location']}
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
      <Form.Item
        label={t['userSetting.label.introduction']}
        field="introduction"
      >
        <Input.TextArea />
      </Form.Item>

      <Typography.Title heading={6}>
        {t['userSetting.title.socialInfo']}
      </Typography.Title>
      <Form.Item
        label={t['userSetting.label.personalWebsite']}
        field="personalWebsite"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t['userSetting.label.personalWebsite']}
        field="personalWebsite"
      >
        <Input />
      </Form.Item>
      <Space>
        <Button type="primary" loading={loading} onClick={onSaveBtnClick}>
          {t['userSetting.save']}
        </Button>
        <Button onClick={onCancelBtnClick}>{t['userSetting.cancel']}</Button>
      </Space>
    </Form>
  );
}
