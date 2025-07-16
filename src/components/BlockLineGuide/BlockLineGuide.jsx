import {React} from 'react';
import styles from './BlockLineGuide.module.css';

const BlockLineGuide = ({ className, content }) => {
  return (
    <div className={className}>
      <div className={styles["block-line-guide"]}>
        <p className="content">{content}</p>
      </div>
    </div>
  );
}

export default BlockLineGuide;