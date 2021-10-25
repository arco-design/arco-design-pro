// 活跃贡献者
import { Avatar, Card, List, Typography } from '@arco-design/web-react';
import React from 'react';
import useLocale from '../../utils/useLocale';

export default () => {
  const data = [
    {
      name: '秦臻宇',
      email: 'qingzhenyu@arco.design',
      avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    },
    {
      name: '于涛',
      email: 'yuebao@arco.design',
      avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    },
    {
      name: '宁波',
      email: 'ningbo@arco.design',
      avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    },
    {
      name: '郑曦月',
      email: 'zhengxiyue@arco.design',
      avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
    },
    {
      name: '宁波',
      email: 'ningbo@arco.design',
      avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    },
  ];
  const locale = useLocale();
  return (
    <Card bordered={false}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }} heading={6}>
        {locale['multiDAnalysis.card.title.activeContributors']}
      </Typography.Title>
      <List bordered={false} split={false} style={{ paddingBottom: 4 }}>
        {data.map((item, index) => (
          <List.Item style={{ padding: 0 }} key={`${index}`}>
            <List.Item.Meta
              avatar={
                <Avatar>
                  <img alt="avatar" src={item.avatar} />
                </Avatar>
              }
              title={item.name}
              description={item.email}
              style={{ padding: '3px 0' }}
            />
          </List.Item>
        ))}
      </List>
    </Card>
  );
};
