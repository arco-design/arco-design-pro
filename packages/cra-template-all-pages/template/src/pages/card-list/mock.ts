import Mock from 'mockjs';
import setupMock from '../../utils/setupMock';

const serviceList = [
  {
    icon: 'code',
    title: '云服务器',
    description: '灵活的服务器，带宽与存储服务。',
    enable: true,
  },
  {
    icon: 'edit',
    title: '性能测试',
    description: '灵活的服务器，带宽与存储服务。',
    enable: true,
  },
  {
    icon: 'user',
    title: '稳定性测试',
    description: '灵活的服务器，带宽与存储服务。',
    enable: true,
  },
];

const docsList = [
  {
    title: '视频点播',
    description: '本文档为您介绍了如何在 Ubuntu 系统以及 Apache 2 中安装字节云 SSL 证书',
  },
];

setupMock({
  setup() {
    // 获取表单数据
    Mock.mock(new RegExp('/api/cardList/service/recent'), () => {
      const count = 3;
      return new Array(count).fill(0).map((_, index) => ({
        ...serviceList[index % serviceList.length],
        id: Mock.Random.guid(),
      }));
    });

    // 获取表单数据
    Mock.mock(new RegExp('/api/cardList/service/dev'), () => {
      const count = 9;
      return new Array(count).fill(0).map((_, index) => ({
        ...serviceList[index % serviceList.length],
        id: Mock.Random.guid(),
      }));
    });

    // 获取表单数据
    Mock.mock(new RegExp('/api/cardList/docs'), () => {
      const count = 3;
      return new Array(count).fill(0).map((_, index) => ({
        ...docsList[index % docsList.length],
        id: Mock.Random.guid(),
      }));
    });
  },
});
