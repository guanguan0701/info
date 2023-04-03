import { Button, Dialog, List } from 'antd-mobile';
import React from 'react';
import styles from './index.less';

const { Item } = List;

const RegisterDetail = () => {
    // 删除事件
    const delEvent = () => {
        Dialog.confirm({
            title: '温馨提示',
            content: '删除内容后将不可恢复！确定要删除该信息登记么？'
            // bodyStyle:{{color:'red'}}
        });
    };
    return (
        <div className={styles.page}>
            <div className={styles.page_header}>
                <div className={styles.page_header_symbol} />
                <div className={styles.page_header_info}>活动信息等级</div>
            </div>

            <List mode='card'>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>目标产品</div>
                        <div className={styles.page_item_right}>盖胃平</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>生产企业</div>
                        <div className={styles.page_item_right}>杭州核盛制药</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>模板名称</div>
                        <div className={styles.page_item_right}>药店信息调研收集默认模版</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>收集人</div>
                        <div className={styles.page_item_right}>小李</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>收集日期</div>
                        <div className={styles.page_item_right}>2022-02-22</div>
                    </div>
                </Item>
            </List>
            <div className={styles.page_header}>
                <div className={styles.page_header_symbol} />
                <div className={styles.page_header_info}>基础信息</div>
            </div>

            <List mode='card'>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>终端名称</div>
                        <div className={styles.page_item_right}>余杭区第一人民医院</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>所在城市</div>
                        <div className={styles.page_item_right}>浙江省/杭州市</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>终端地址</div>
                        <div className={styles.page_item_right}>浙江省杭州市余杭区</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>终端电话</div>
                        <div className={styles.page_item_right}>12222222</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>其他终端类型</div>
                        <div className={styles.page_item_right}>医院</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>经营类型</div>
                        <div className={styles.page_item_right}>公立</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>是否采集</div>
                        <div className={styles.page_item_right}>是</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>是否医保</div>
                        <div className={styles.page_item_right}>是</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>门诊量</div>
                        <div className={styles.page_item_right}>111</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>床位数</div>
                        <div className={styles.page_item_right}>213</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>年度用药量</div>
                        <div className={styles.page_item_right}>222111</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>备注</div>
                        <div className={styles.page_item_right}>213</div>
                    </div>
                </Item>
            </List>
            <div className={styles.page_header}>
                <div className={styles.page_header_symbol} />
                <div className={styles.page_header_info}>备注</div>
            </div>

            <List mode='card'>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>目标科室</div>
                        <div className={styles.page_item_right}>210</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>竞品情况</div>
                        <div className={styles.page_item_right}>-</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>潜在用药量</div>
                        <div className={styles.page_item_right}>70000</div>
                    </div>
                </Item>
                <Item>
                    <div className={styles.page_item}>
                        <div className={styles.page_item_left}>机遇与挑战</div>
                        <div className={styles.page_item_right}>
                            这是一段备注信息这是一段备注信息这是一段备注信息这是一段备注信息一段备注信息
                        </div>
                    </div>
                </Item>
            </List>
            <div className={styles.page_button}>
                <Button
                    onClick={delEvent}
                    className={styles.page_button_left}
                    style={{
                        marginRight: 12,
                        '--background-color': '#f4f4f4',
                        '--border-color': '#e0e0e0',
                        '--border-radius': '20px',
                        '--text-color': '#454F4E'
                    }}
                >
                    删除
                </Button>
                <Button
                    className={styles.page_button_right}
                    type='submit'
                    style={{
                        '--background-color': '#189AB9',
                        '--border-color': '#e0e0e0',
                        '--border-radius': '20px',
                        '--text-color': '#fff'
                    }}
                >
                    编辑
                </Button>
            </div>
        </div>
    );
};

export default RegisterDetail;
