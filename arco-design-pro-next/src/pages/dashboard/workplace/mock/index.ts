import Mock from 'mockjs';
import qs from 'query-string';

if (process.env.NODE_ENV === 'development') {
  Mock.mock(new RegExp('/api/workplace/overview-content'), () => {
    const year = new Date().getFullYear();
    const getLineData = () => {
      return new Array(12).fill(0).map((_item, index) => ({
        date: `${year}-${index + 1}`,
        count: Mock.Random.natural(20000, 75000),
      }));
    };
    return {
      allContents: '373.5w+',
      liveContents: '368',
      increaseComments: '8874',
      growthRate: '2.8%',
      chartData: getLineData(),
    };
  });

  const { list } = Mock.mock({
    'list|100': [
      {
        'rank|+1': 1,
        title: '@ctitle(5)',
        pv: function() {
          return 500000 - 3200 * this.rank;
        },
        increase: function() {
          return Math.random().toFixed(4);
        },
      },
    ],
  });

  Mock.mock(new RegExp('/api/workplace/popular-contents'), (params) => {
    const { page = 1, pageSize = 5 } = qs.parseUrl(params.url).query as unknown as {
      page?: number;
      pageSize?: number;
    };
    return {
      list: list.slice((page - 1) * pageSize, page * pageSize),
      total: 100,
    }
  });

  Mock.mock(new RegExp('/api/workplace/content-percentage'), () => {
    return [{
      type: '纯文本',
      count: 148564,
      percent: 0.16,
    }, {
      type: '图文类',
      count: 334271,
      percent: 0.36,
    }, {
      type: '视频类',
      count: 445695,
      percent: 0.48
    }];
  });

  Mock.mock(new RegExp('/api/workplace/announcement'), () => {
    return [{
      type: 'activity',
      key: '1',
      content: '内容最新优惠活动',
    }, {
      type: 'info',
      key: '2',
      content: '新增内容尚未通过审核，详情请点击查看。',
    }, {
      type: 'notice',
      key: '3',
      content: '当前产品试用期即将结束，如需续费请点击查看。',
    }, {
      type: 'notice',
      key: '4',
      content: '1 月新系统升级计划通知',
    }, {
      type: 'info',
      key: '5',
      content: '新增内容已经通过审核，详情请点击查看。',
    }];
  });
}
