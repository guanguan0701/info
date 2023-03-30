import { DotLoading, SearchBar } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import { getTemplate } from 'services/selectingTemplate';
import { history } from 'umi';
import styles from './index.less';

const SelectingTemplate = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        try {
            setLoading(true);
            const res = await getTemplate();
            setLoading(false);
            const data = res.data || [];
            setDataSource(data);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.page_search}>
                <SearchBar style={{ '--background': '#ffffff' }} placeholder='请输入模版名称、创建方进行搜索' />
            </div>
            {loading ? (
                <div className={styles.page_loading}>
                    <span>加载中</span>
                    <DotLoading />
                </div>
            ) : (
                <div>
                    {dataSource.map((item) => {
                        return (
                            <div
                                className={styles.page_item}
                                key={item.id}
                                onClick={() => history.push('/terminalResearch/informationRegister')}
                            >
                                <div className={styles.page_item_container}>
                                    <div className={styles.page_item_icon} />
                                    <div className={styles.page_item_main}>
                                        <div className={styles.page_item_title}>{item.templateName}</div>
                                        <div className={styles.page_item_useCondition}>
                                            <div className={styles.page_item_isUse}>{item.status}</div>
                                            <div className={styles.page_item_symbol}>|</div>
                                            <div className={styles.page_item_sequence}>模板编号：{item.number}</div>
                                        </div>
                                        <div className={styles.page_item_bottom}>
                                            <div className={styles.page_item_founder}>创建方：{item.founder}</div>
                                            <span className={styles.page_item_element}>|</span>
                                            <div className={styles.page_item_time}>
                                                编辑时间：{item.editTime || '-'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.page_item_type}>{item.type}</div>
                                </div>
                            </div>
                        );
                    })}
                    <div className={styles.page_footer}>仅显示使用中的模板，已禁用模板不显示</div>
                </div>
            )}
        </div>
    );
};
export default SelectingTemplate;
