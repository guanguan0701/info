import { ActionSheet, Button, SearchBar } from 'antd-mobile';
import { AddCircleOutline, SearchOutline } from 'antd-mobile-icons';
import React, { useState } from 'react';
import styles from './index.less';

const ResearchWeighty = (props) => {
    const [visible, setVisible] = useState(false);

    // const creation = () => {
    const actions = [
        { text: '新建', key: 'new' },
        { text: '草稿箱', key: 'drafts' }
    ];
    console.log('点了creation');

    // };

    return (
        <div className={styles.researchWeighty}>
            <div className={styles.researchWeighty_container}>
                <div style={{ marginBottom: 16 }}>
                    <SearchBar
                        placeholder='请输入表单名称/登记人进行搜索'
                        style={{
                            '--border-radius': '6px',
                            '--background': '#ffffff',
                            '--height': '36.5px',
                            '--padding-left': '12px'
                        }}
                    />
                </div>
                {/* <Form.Item className={styles.researchWeighty_top}> */}
                {/* <Form.Item className={styles.researchWeighty_top_container}> */}
                {/* <SearchOutline className={styles.researchWeighty_top_container_icon} />
                    <Input */}
                {/* placeholder='请输入表单名称/登记人进行搜索'
                        className={styles.researchWeighty_top_container_search} */}
                {/* /> */}
                {/* </Form.Item> */}
                {/* </Form.Item> */}

                {props.data.map((item) => {
                    return (
                        <div key={item.id} className={styles.researchWeighty_item}>
                            <div className={styles.researchWeighty_item_top}>
                                <div className={styles.researchWeighty_item_top_left}>
                                    <span>{item.type}</span>
                                </div>
                                <span className={styles.researchWeighty_item_top_right}>{item.name}</span>
                            </div>
                            <span className={styles.researchWeighty_item_product}>目标产品：{item.targetProduct}</span>
                            <span className={styles.researchWeighty_item_template}>引用模板：{item.template}</span>
                            <div className={styles.researchWeighty_item_bottom}>
                                <span className={styles.researchWeighty_item_registrant}>
                                    登记人：{item.registrant}
                                </span>
                                <span className={styles.researchWeighty_item_registrantTime}>
                                    {item.registrantTime}
                                </span>
                            </div>
                        </div>
                    );
                })}
                <div className={styles.researchWeighty_bottom}>-没有更多数据了-</div>
                <AddCircleOutline
                    style={{ fontSize: 46, color: 'blue' }}
                    className={styles.researchWeighty_circleOutline}
                    onClick={() => setVisible(true)}
                >
                    +
                </AddCircleOutline>
                <ActionSheet cancelText='取消' visible={visible} actions={actions} onClose={() => setVisible(false)} />
            </div>
        </div>
    );
};
export default ResearchWeighty;
