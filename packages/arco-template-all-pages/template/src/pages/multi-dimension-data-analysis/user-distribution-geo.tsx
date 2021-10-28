// 用户地域分布
import React, { useEffect, useState } from 'react';
import { Chart, Coord, Geom, Tooltip } from 'bizcharts';
import { Card, Typography } from '@arco-design/web-react';
import DataSet from '@antv/data-set';

import useChartTheme from '../../utils/useChartTheme';
import useLocale from '../../utils/useLocale';
import worldJSON from '../../assets/world.json';
// import { keepMapRatio } from './utils/map';

export default () => {
  const locale = useLocale();
  const chartTheme = useChartTheme();
  const [data] = useState([
    {
      name: 'China',
      value: 5670,
    },
    {
      name: 'Canada',
      value: 5670,
    },
  ]);
  const [mapData, setMapData] = useState();

  useEffect(() => {
    const feas = worldJSON.features
      .filter((feat) => feat.properties.name)
      .map((v) => {
        const featValue = data.find((i) => i.name === v.properties.name);
        return featValue
          ? {
              ...v,
              properties: {
                ...v.properties,
                value: featValue.value,
              },
            }
          : v;
      });
    const res = { ...worldJSON, features: feas };
    setMapData(res as any);
  }, [data]);

  let bgView;
  if (mapData) {
    const ds = new DataSet();
    const dv = ds
      .createView()
      .source(mapData, {
        type: 'GeoJSON',
      })
      .transform({
        type: 'geo.projection',
        projection: 'geoMercator',
        as: ['x', 'y', 'centroidX', 'centroidY'],
      });

    bgView = new DataSet.View().source(dv.rows);
  }

  return (
    <Card bordered={false}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 16, fontSize: 14 }} heading={6}>
        {locale['multiDAnalysis.card.title.userDistributionGeo']}
      </Typography.Title>
      <Chart
        pure
        autoFit
        height={263}
        data={bgView ? bgView.rows : bgView}
        theme={chartTheme}
        // onAfterRender={(e, c) => {
        //   keepMapRatio(mapData, c, "rerender")
        // }}
      >
        <Coord reflect="y" />
        <Geom
          type="polygon"
          position="x*y"
          color={[
            'properties',
            (feat) => {
              return feat.value ? '#6395f9' : '#fff';
            },
          ]}
          style={{
            stroke: '#ccc',
          }}
          tooltip={[
            'name*properties',
            (t, p) => {
              return {
                name: t,
                title: t,
                value: p.value || '-',
              };
            },
          ]}
        />
        <Tooltip title="name" />
      </Chart>
    </Card>
  );
};
