import Mock from 'mockjs';

if (process.env.NODE_ENV === 'development') {
  // 保存表单数据
  Mock.mock(new RegExp('/api/groupForm'), () => {
    return true;
  });
}
