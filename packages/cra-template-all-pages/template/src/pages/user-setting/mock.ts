import Mock from 'mockjs';
import setupMock from '../../utils/setupMock';

setupMock({
  setup() {
    // 保存个人信息
    Mock.mock(new RegExp('/api/user/saveInfo'), () => {
      return 'ok';
    });
  },
});
