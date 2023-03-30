import { ActionSheet, DotLoading, ErrorBlock, SearchBar, Toast } from 'antd-mobile';
import { AddOutline } from 'antd-mobile-icons';
import React from 'react';
import { getResearchList } from 'services/terminalResearch';
import { history } from 'umi';

import styles from './index.less';

const actions = [
    {
        text: '新建',
        key: 'create'
    },
    {
        text: '草稿箱',
        key: 'draft'
    }
];

const Index = () => {
    const [dataSource, setDataSource] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const getData = async () => {
        setLoading(true);
        try {
            const res = await getResearchList();
            const data = res.data || []; // 空值处理
            console.log(data, 'data');
            setDataSource(data);
        } catch (err) {
            console.error(err); // 捕获错误
        }
        setLoading(false);
    };

    React.useEffect(() => {
        getData();
    }, []);

    // const onCreate = () => {
    //     let handler;
    //     handler = ActionSheet.show({
    //         actions,
    //         cancelText: '取消',
    //         onAction: (action) => {
    //             window.alert(action.text);
    //             handler?.close();
    //         }
    //     });
    // };
    const onCreate = () => {
        ActionSheet.show({
            actions,
            cancelText: '取消',
            closeOnAction: true,
            onAction: (actions) => {
                if (actions.key === 'create') {
                    history.push('/terminalResearch/selectingTemplate');
                }
                if (actions.key === 'draft') {
                    history.push('/research');
                }
            }
        });
    };
    return (
        <div className={styles.page}>
            <SearchBar placeholder='请输入表单名称、登记人进行搜索' className={styles.page_search} />
            {loading ? (
                <div className={styles.page_loading}>
                    <span>加载中</span>
                    <DotLoading />
                </div>
            ) : (
                <>
                    {dataSource.length > 0 ? (
                        <div className={styles.page_list}>
                            {dataSource.map((item) => (
                                <div key={item.id} className={styles.page_item} onClick={() => history.push('/')}>
                                    <div className={styles.page_item_header}>
                                        <div className={styles.page_item_tag}>{item.type}</div>
                                        <div className={styles.page_item_title}>{item.name}</div>
                                    </div>
                                    <div className={styles.page_item_product}>
                                        目标产品：{item.targetProduct || '-'}
                                    </div>
                                    <div className={styles.page_item_template}>引用模板：{item.template || '-'}</div>
                                    <div className={styles.page_item_footer}>
                                        <div>登记人：{item.registrant}</div>
                                        <div style={{ marginLeft: 'auto' }}>{item.registrantTime}</div>
                                    </div>
                                </div>
                            ))}
                            <div className={styles.page_list_empty}>-没有更多数据了-</div>
                            <div className={styles.page_addIcon} onClick={onCreate}>
                                <AddOutline />
                            </div>
                        </div>
                    ) : (
                        <div className={styles.page_errorBlock}>
                            <ErrorBlock status='empty' description={<a onClick={onCreate}>立即创建</a>} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Index;
