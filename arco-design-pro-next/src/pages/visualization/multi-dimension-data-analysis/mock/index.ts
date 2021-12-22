import Mock from 'mockjs';
import dayjs from 'dayjs';

const legend = ['内容曝光量', '内容点击量', '内容生产量', '活跃用户数'];

const getLineData = (name) => {
  const { list } = Mock.mock({
    'list|10': [
      {
        'id|+1': 1,
        time: function () {
          return dayjs().subtract(this.id, 'days').format('MM-DD');
        },
        count: () => Mock.Random.natural(100, 5000),
        name: name,
      },
    ],
  });
  return list;
};

Mock.mock(new RegExp('/api/muti-dimension/overview'), () => {
  const { array: overviewData } = Mock.mock({
    'array|4': [
      function () {
        return Mock.Random.natural(0, 10000);
      },
    ],
  });
  let list = [];
  legend.forEach((name) => (list = list.concat(getLineData(name))));
  return {
    overviewData,
    chartData: list,
  };
});
