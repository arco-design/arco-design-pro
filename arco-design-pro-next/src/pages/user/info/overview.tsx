import React from 'react';
import RecentProject from './latest-project';
import LatestActivity from './latest-activity';

export default function Overview() {
  return (
    <div>
      <RecentProject />
      <LatestActivity />
    </div>
  );
}
