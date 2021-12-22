import React from 'react';
import { Card } from '@arco-design/web-react';
import cs from 'classnames';
import { IconPlus } from '@arco-design/web-react/icon';
import styles from './style/index.module.less';

interface AddCardProps {
  description?: string;
}
function AddCard(props: AddCardProps) {
  return (
    <Card
      className={cs(styles.cardBlock, styles.addCard)}
      title={null}
      bordered={true}
    >
      <div className={styles.content}>
        <div className={styles.addIcon}>
          <IconPlus />
        </div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </Card>
  );
}

export default AddCard;
