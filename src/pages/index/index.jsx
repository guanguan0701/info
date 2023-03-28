import { RightOutline } from 'antd-mobile-icons';
import React from 'react';
import { Link } from 'umi';
import { dataSource } from './data';
import styles from './index.less';

export default function Index() {
    return (
        <div className={styles.info}>
            <div className={styles.info_container}>
                <ul>
                    {dataSource.map((item) => (
                        <Link key={item.title} to={item.path}>
                            <li className={styles.info_item}>
                                <span className={styles.info_item_left} />
                                <span className={styles.info_item_middle}>{item.title}</span>
                                <RightOutline className={styles.info_item_right} />
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}
