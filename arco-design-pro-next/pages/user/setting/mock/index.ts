import Mock from 'mockjs';

if (process.env.NODE_ENV === 'development') {
  // 保存个人信息
  Mock.mock(new RegExp('/api/user/saveInfo'), () => {
    return 'ok';
  });
}
