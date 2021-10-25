import { Grid } from '@arco-design/web-react';
import React from 'react';
import BasicInfo from './basic-info';
import Pipeline from './pipeline';
import Commit from './commit';
import FileList from './file-list';

export default () => {
  return (
    <div>
      <Grid.Row gutter={40}>
        <Grid.Col span={12}>
          <BasicInfo />
        </Grid.Col>
        <Grid.Col span={12}>
          <Pipeline />
          <Commit />
          <FileList />
        </Grid.Col>
      </Grid.Row>
    </div>
  );
};
