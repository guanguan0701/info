import { Button, Form, Input, TextArea } from 'antd-mobile';
import React from 'react';
import styles from './index.less';

const informationRegister = () => {
    return (
        <div>
            <Form
                layout='horizontal'
                footer={
                    <div style={{ backgroundColor: '#fff' }}>
                        <div>保存草稿</div>
                        <Button color='primary'>提交</Button>
                        <Button type='submit' color='primary'>
                            完成创建
                        </Button>
                    </div>
                    // <Button block type='submit' color='primary' size='large'>
                    //     提交
                    // </Button>
                }
            >
                <Form.Item
                    className={styles.page_item}
                    name='formName'
                    label='表单名称'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请输入表单名称' />
                </Form.Item>
                <Form.Item arrow className={styles.page_item} name='templateName' label='模板名称'>
                    <Input onChange={console.log} placeholder='请输入模板名称' />
                </Form.Item>
                <Form.Header>
                    <div className={styles.page_item_header}>
                        <div className={styles.page_item_symbol} />
                        <div className={styles.page_item_info}>表单信息</div>
                    </div>
                </Form.Header>
                <Form.Item
                    className={styles.page_item}
                    name='target product'
                    label='目标产品'
                    arrow
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input onChange={console.log} placeholder='请选择目标产品' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='firm'
                    label='生产企业'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input onChange={console.log} placeholder='选择产品自动填充' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='collecter'
                    label='收集人'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请填写收集人' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='collectionDate'
                    label='收集日期'
                    arrow
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input onChange={console.log} placeholder='请选择收集日期' />
                </Form.Item>
                <Form.Header>
                    <div className={styles.page_item_header}>
                        <div className={styles.page_item_symbol} />
                        <div className={styles.page_item_info}>基础信息</div>
                    </div>
                </Form.Header>
                <Form.Item
                    className={styles.page_item}
                    name='TerminalName'
                    label='终端名称'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请填写终端名称' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='city'
                    arrow
                    label='所在城市'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请选择城市' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='terminalAddress'
                    label='终端地址'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请填写终端地址' />
                </Form.Item>
                <Form.Item className={styles.page_item} name='terminalAddress' label='终端电话'>
                    <Input clearable onChange={console.log} placeholder='请填写终端电话' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='otherTerminalTypes'
                    arrow
                    label='其他终端类型'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请选择终端类型' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='manageType'
                    arrow
                    label='经营类型'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请选择经营类型' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='collectOrNot'
                    arrow
                    label='是否采集'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请选择是否采集' />
                </Form.Item>
                <Form.Item className={styles.page_item} name='MedicalInsuranceOrNot' arrow label='是否医保'>
                    <Input onChange={console.log} placeholder='请选择是否医保' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    rules={[{ required: true, message: '不能为空' }]}
                    name='outpatientVisits'
                    arrow
                    label='门诊量'
                >
                    <Input clearable onChange={console.log} placeholder='请填写门诊量' />
                </Form.Item>
                <Form.Item className={styles.page_item} name='numberOfBed' arrow label='床位数'>
                    <Input clearable onChange={console.log} placeholder='请填写门诊量' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    rules={[{ required: true, message: '不能为空' }]}
                    name='annualDosage'
                    arrow
                    label='年度用药量'
                >
                    <Input clearable onChange={console.log} placeholder='请填写年度用药量' />
                </Form.Item>

                <Form.Item className={styles.page_item}>
                    备注
                    <TextArea
                        placeholder='备注(非必填)'
                        showCount
                        maxLength={100}
                        style={{ background: '#fafafa', borderRadius: '8px' }}
                    />
                </Form.Item>
                <Form.Header>
                    <div className={styles.page_item_header}>
                        <div className={styles.page_item_symbol} />
                        <div className={styles.page_item_info}>产品关联信息</div>
                    </div>
                </Form.Header>
                <Form.Item
                    className={styles.page_item}
                    name='targetDepartment'
                    label='目标科室'
                    arrow
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input onChange={console.log} placeholder='请选择目标科室' />
                </Form.Item>
                <Form.Item className={styles.page_item}>
                    竞品情况
                    <TextArea
                        placeholder='请输入竞品情况'
                        showCount
                        maxLength={500}
                        style={{ background: '#fafafa', borderRadius: '8px' }}
                    />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='potentialDosage'
                    label='潜在用药量'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请填写潜在用药量' />
                </Form.Item>
                <Form.Item className={styles.page_item} rules={[{ required: true, message: '不能为空' }]}>
                    机遇与挑战
                    <TextArea
                        placeholder='请输入机遇与挑战'
                        showCount
                        maxLength={500}
                        style={{ background: '#fafafa', borderRadius: '8px' }}
                    />
                </Form.Item>
            </Form>
        </div>
    );
};

export default informationRegister;
