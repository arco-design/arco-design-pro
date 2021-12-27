import React from 'react';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import {
  Input,
  Select,
  Cascader,
  Button,
  Form,
  Space,
  Message,
} from '@arco-design/web-react';

function InfoForm() {
  const t = useLocale(locale);
  const [form] = Form.useForm();

  const handleSave = async () => {
    try {
      await form.validate();
      Message.success('userSetting.saveSuccess');
    } catch (_) {}
  };

  const handleReset = () => {
    form.resetFields();
  };
  return (
    <Form style={{ width: '500px', margin: '0 auto' }} form={form}>
      <Form.Item
        label={t['userSetting.info.email']}
        field="email"
        rules={[
          {
            type: 'email',
            required: true,
            message: t['userSetting.info.email.placeholder'],
          },
        ]}
      >
        <Input placeholder={t['userSetting.info.email.placeholder']} />
      </Form.Item>
      <Form.Item
        label={t['userSetting.info.nickName']}
        field="nickName"
        rules={[
          {
            required: true,
            message: t['userSetting.info.nickName.placeholder'],
          },
        ]}
      >
        <Input placeholder={t['userSetting.info.nickName.placeholder']} />
      </Form.Item>
      <Form.Item
        label={t['userSetting.info.area']}
        field="rangeArea"
        required={true}
      >
        <Select options={['中国']} />
      </Form.Item>
      <Form.Item
        label={t['userSetting.info.location']}
        field="location"
        initialValue={['BeiJing', 'BeiJing', 'HaiDian']}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Cascader
          options={[
            {
              label: '北京市',
              value: 'BeiJing',
              children: [
                {
                  label: '北京市',
                  value: 'BeiJing',
                  children: [
                    { label: '海淀区', value: 'HaiDian' },
                    { label: '朝阳区', value: 'ChaoYang' },
                  ],
                },
              ],
            },
            {
              label: '上海市',
              value: 'ShangHai',
              children: [
                {
                  label: '上海市',
                  value: 'ShangHai',
                  children: [
                    { label: '黄浦区', value: 'HuangPu' },
                    { label: '静安区', value: 'JingAn' },
                  ],
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label={t['userSetting.info.address']} field="address">
        <Input placeholder={t['userSetting.info.address.placeholder']} />
      </Form.Item>
      <Form.Item label={t['userSetting.info.profile']} field="address">
        <Input.TextArea
          placeholder={t['userSetting.info.profile.placeholder']}
        />
      </Form.Item>

      <Form.Item label=" ">
        <Space>
          <Button type="primary" onClick={handleSave}>
            {t['userSetting.save']}
          </Button>
          <Button onClick={handleReset}>{t['userSetting.reset']}</Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default InfoForm;
