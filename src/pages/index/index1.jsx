import { Button } from 'antd-mobile';
import React from 'react';
import { getDemo } from 'services/home';
import { history } from 'umi';

import logo from 'assets/logo.svg';
import styles from './index.less';

const Index = () => {
    const getData = async () => {
        const res = await getDemo();
        const { data } = res;
        console.log(data, 'data');
    };

    const openAbout = () => {
        history.push('/about');
    };

    return (
        <div>
            <div className={styles.app}>
                <header className={styles.app_header}>
                    <img src={logo} className={styles.app_logo} alt='logo' />
                    <p className={styles.app_content} onClick={openAbout}>
                        Edit <code>src/pages/index/index.jsx</code> and save to reload.
                    </p>
                    <a className={styles.app_link} onClick={getData}>
                        Learn React
                    </a>
                </header>
            </div>
        </div>
    );
};

export default Index;
