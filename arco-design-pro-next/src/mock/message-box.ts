import Mock from 'mockjs';

const haveReadIds = [];
const getMessageList = () => {
  return [
    {
      id: 1,
      type: 'message',
      title: '郑曦月',
      subTitle: '的私信',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
      content: '审批请求已发送，请查收',
      time: '今天 12:30:01',
    },
    {
      id: 2,
      type: 'message',
      title: '宁波',
      subTitle: '的回复',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      content:
        '此处 bug 已经修复，如有问题请查阅文档或者继续 github 提 issue～',
      time: '今天 12:30:01',
    },
    {
      id: 3,
      type: 'message',
      title: '宁波',
      subTitle: '的回复',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      content: '此处 bug 已经修复',
      time: '今天 12:20:01',
    },
    {
      id: 4,
      type: 'todo',
      title: '域名服务',
      subTitle: '',
      avatar: '',
      content: '郑曦月申请开通 arco.design 域名',
      time: '今天 12:20:01',
    },
    {
      id: 5,
      type: 'todo',
      title: '域名服务',
      subTitle: '',
      avatar: '',
      content: '郑曦月申请开通 arco.design 域名',
      time: '今天 12:20:01',
    },
    {
      id: 6,
      type: 'todo',
      title: '域名服务',
      subTitle: '',
      avatar: '',
      content: '郑曦月申请开通 arco.design 域名',
      time: '今天 12:20:01',
    },
  ].map((item) => ({
    ...item,
    status: haveReadIds.indexOf(item.id) === -1 ? 0 : 1,
  }));
};

Mock.mock(new RegExp('/api/message/list'), () => {
  return getMessageList();
});

Mock.mock(new RegExp('/api/message/read'), (params) => {
  const { ids } = JSON.parse(params.body);
  haveReadIds.push(...(ids || []));
  return true;
});
