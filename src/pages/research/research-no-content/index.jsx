import { Button, ErrorBlock, SearchBar } from 'antd-mobile';
import React from 'react';
import CreateImmediately from './CreateImmediately';
import Styles from './index.less';

const ResearchNoContent = () => {
    return (
        <div className={Styles.researchNoContent}>
            <div className={Styles.researchNoContent_searchBar}>
                <SearchBar
                    style={{
                        '--background': '#ffffff',
                        '--height': '36.5px'
                    }}
                />
            </div>
            <div className={Styles.researchNoContent_errorBlock}>
                <ErrorBlock status='empty' description={<CreateImmediately />} />
            </div>
        </div>
    );
};
export default ResearchNoContent;
