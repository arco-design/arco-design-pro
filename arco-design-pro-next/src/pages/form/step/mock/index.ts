import Mock from 'mockjs';

// 保存表单数据
Mock.mock(new RegExp('/api/groupForm'), () => {
  return true;
});
