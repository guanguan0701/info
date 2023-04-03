import { Button, Cascader, DatePicker, Dialog, Form, Input, Picker, Space, TextArea, Toast } from 'antd-mobile';
import { CloseCircleFill } from 'antd-mobile-icons';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useLocation } from 'umi';
import { collectOrNot, manageType, medicalInsuranceOrNot, options, otherTerminalTypes } from './dataConfig';
import styles from './index.less';

const InfoRegister = () => {
    const [pickerVisible, setPickerVisible] = useState(0);
    const location = useLocation();
    console.log(location);
    const [form] = Form.useForm();
    const [value, setValue] = useState([]);
    const onSubmit = () => {
        const values = form.getFieldsValue();
        Dialog.alert({
            content: <pre>{JSON.stringify(values, null, 2)}</pre>
        });
    };
    return (
        <div className={styles.page}>
            <Form
                form={form}
                layout='horizontal'
                // onFinish={(value) => {
                //     // Toast.show({
                //     //     icon: 'success',
                //     //     content: '保存成功'
                //     // });
                //     console.log(vlaue);
                // }}
                // footer={
                //     <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                //         <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', marginRight: 41 }}>
                //             <div style={{ width: 13.5, height: 15, border: '1px solid black' }} />
                //             保存草稿
                //         </div>
                //         <Button
                //             style={{
                //                 height: 40,
                //                 width: 96,
                //                 '--background-color': '#fff',
                //                 '--border': '0.5px solid #dfdddb',
                //                 '--border-radius': '20.5px',
                //                 '--text-color': '#454f4e',
                //                 fontSize: '16px',
                //                 marginRight: 16
                //             }}
                //         >
                //             提交
                //         </Button>
                //         <Button
                //             type='submit'
                //             style={{
                //                 width: 112,
                //                 '--background-color': '#f4f4f4',
                //                 '--border': '0.5px solid #dfdddb',
                //                 '--border-radius': '22px',
                //                 '--text-color': '#bebbbf',
                //                 fontSize: '16px'
                //             }}
                //         >
                //             完成创建
                //         </Button>
                //     </div>
                // }
            >
                <Form.Item
                    className={styles.page_item}
                    name='formName'
                    label='表单名称'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请输入表单名称' />
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) => prevValues.collectionDate !== curValues.collectionDate}
                >
                    {({ getFieldValue, setFieldsValue }) => (
                        <Form.Item
                            initialValues={location.state.some}
                            className={styles.page_item}
                            name='templateName'
                            label='模板名称'
                        >
                            <Input defaultValue={location.state.some} />
                        </Form.Item>
                    )}
                </Form.Item>
                <Form.Header>
                    <div className={styles.page_item_header}>
                        <div className={styles.page_item_symbol} />
                        <div className={styles.page_item_info}>表单信息</div>
                    </div>
                </Form.Header>
                <Form.Item
                    className={styles.page_item}
                    name='targetProduct'
                    label='目标产品'
                    arrow
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input onChange={console.log} placeholder='选择产品自动填充' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='firm'
                    label='生产企业'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input onChange={console.log} placeholder='请选择目标产品' />
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
                    noStyle
                    shouldUpdate={(prevValues, curValues) => prevValues.collectionDate !== curValues.collectionDate}
                >
                    {({ getFieldValue, setFieldsValue }) => (
                        <Form.Item
                            className={styles.page_item}
                            name='collectionDate'
                            label='收集日期'
                            trigger='onConfirm'
                            rules={[{ required: true, message: '不能为空' }]}
                            arrow={
                                getFieldValue('collectionDate') ? (
                                    <CloseCircleFill
                                        style={{
                                            color: 'var(--adm-color-light)',
                                            fontSize: 14
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setFieldsValue({ collectionDate: null });
                                        }}
                                    />
                                ) : (
                                    true
                                )
                            }
                            onClick={() => {
                                setPickerVisible(1);
                            }}
                        >
                            <DatePicker
                                visible={pickerVisible === 1 ? true : false}
                                onClose={() => {
                                    setPickerVisible(0);
                                }}
                                destroyOnClose
                                mouseWheel
                            >
                                {(value) =>
                                    value ? (
                                        dayjs(value).format('YYYY-MM-DD')
                                    ) : (
                                        <span style={{ color: '#bebbbf' }}>请选择日期</span>
                                    )
                                }
                            </DatePicker>
                        </Form.Item>
                    )}
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
                {({ getFieldValue, setFieldsValue }) => (
                    <Form.Item
                        className={styles.page_item}
                        name='city'
                        arrow
                        label='所在城市'
                        rules={[{ required: true, message: '不能为空' }]}
                        onClick={() => setPickerVisible(6)}
                        shouldUpdate={(prevValues, curValues) => prevValues.collectionDate !== curValues.collectionDate}
                    >
                        <Cascader
                            options={options}
                            visible={pickerVisible === 6 ? true : false}
                            onClose={() => {
                                setPickerVisible(0);
                            }}
                            value={value}
                            onConfirm={setValue}
                        >
                            {(items) => {
                                if (items.every((item) => item === null)) {
                                    return <span style={{ color: '#bebbbf' }}>请选择城市地址</span>;
                                } else {
                                    return items.map((item) => item?.label ?? '未选择').join('-');
                                }
                            }}
                        </Cascader>
                    </Form.Item>
                )}
                <Form.Item
                    className={styles.page_item}
                    name='terminalAddress'
                    label='终端地址'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请填写终端地址' />
                </Form.Item>
                <Form.Item className={styles.page_item} name='terminalPhone' label='终端电话'>
                    <Input clearable onChange={console.log} placeholder='请填写终端电话' />
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) => prevValues.collectionDate !== curValues.collectionDate}
                >
                    {({ getFieldValue, setFieldsValue }) => (
                        <Form.Item
                            className={styles.page_item}
                            name='otherTerminalTypes'
                            arrow
                            label='其他终端类型'
                            rules={[{ required: true, message: '不能为空' }]}
                            onClick={() => setPickerVisible(2)}
                            trigger='onConfirm' // 点击确定收集字段值
                        >
                            <Picker
                                visible={pickerVisible === 2 ? true : false}
                                columns={otherTerminalTypes}
                                onClose={() => setPickerVisible(0)}
                            >
                                {(items, { open }) => {
                                    console.log('items', items);
                                    console.log('open', open);
                                    return (
                                        <Space align='center' onClick={open}>
                                            {items.every((item) => item === null) ? (
                                                <span style={{ color: '#bebbbf' }}>请选择其他终端类型</span>
                                            ) : (
                                                items.map((item) => item?.label ?? '未选择').join(' - ')
                                            )}
                                        </Space>
                                    );
                                }}
                            </Picker>
                        </Form.Item>
                    )}
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) => prevValues.collectionDate !== curValues.collectionDate}
                >
                    {({ getFieldValue, setFieldsValue }) => (
                        <Form.Item
                            className={styles.page_item}
                            name='manageType'
                            arrow
                            label='经营类型'
                            rules={[{ required: true, message: '不能为空' }]}
                            onClick={() => setPickerVisible(3)}
                            trigger='onConfirm' // 点击确定收集字段值
                        >
                            <Picker
                                visible={pickerVisible === 3 ? true : false}
                                columns={manageType}
                                onClose={() => setPickerVisible(0)}
                            >
                                {(items, { open }) => {
                                    console.log('items', items);
                                    console.log('open', open);
                                    return (
                                        <Space align='center' onClick={open}>
                                            {items.every((item) => item === null) ? (
                                                <span style={{ color: '#bebbbf' }}>请选择经营类型</span>
                                            ) : (
                                                items.map((item) => item?.label ?? '未选择').join(' - ')
                                            )}
                                        </Space>
                                    );
                                }}
                            </Picker>
                        </Form.Item>
                    )}
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) => prevValues.collectionDate !== curValues.collectionDate}
                >
                    {({ getFieldValue, setFieldsValue }) => (
                        <Form.Item
                            className={styles.page_item}
                            name='collectOrNot'
                            label='是否采集'
                            trigger='onConfirm'
                            rules={[{ required: true, message: '不能为空' }]}
                            onClick={() => setPickerVisible(4)}
                            arrow={
                                getFieldValue('collectOrNot') ? (
                                    <CloseCircleFill
                                        style={{
                                            color: 'var(--adm-color-light)',
                                            fontSize: 14
                                        }}
                                        onClick={(e) => {
                                            console.log(e);
                                            e.stopPropagation();
                                            console.log(e);
                                            setFieldsValue({ collectOrNot: [] });
                                        }}
                                    />
                                ) : (
                                    true
                                )
                            }
                        >
                            <Picker
                                columns={collectOrNot}
                                onConfirm={setValue}
                                onClose={() => setPickerVisible(0)}
                                onSelect={(val, extend) => {
                                    console.log('onSelect', val, extend.items);
                                }}
                                visible={pickerVisible === 4 ? true : false}
                            >
                                {(items, { open }) => {
                                    console.log('items', items);
                                    console.log('open', open);
                                    return (
                                        <Space align='center' onClick={open}>
                                            {items.every((item) => item === null) ? (
                                                <span style={{ color: '#bebbbf' }}>请选择是否采集</span>
                                            ) : (
                                                items?.map((item) => item?.label ?? '未选择').join(' - ')
                                            )}
                                        </Space>
                                    );
                                }}
                            </Picker>
                        </Form.Item>
                    )}
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='medicalInsuranceOrNot'
                    label='是否医保'
                    trigger='onConfirm'
                    rules={[{ required: true, message: '不能为空' }]}
                    onClick={() => setPickerVisible(5)}
                    arrow
                    shouldUpdate={(prevValues, curValues) => prevValues.collectionDate !== curValues.collectionDate}
                >
                    <Picker
                        columns={medicalInsuranceOrNot}
                        onConfirm={setValue}
                        onClose={() => setPickerVisible(0)}
                        onSelect={(val, extend) => {
                            console.log('onSelect', val, extend.items);
                        }}
                        visible={pickerVisible === 5 ? true : false}
                    >
                        {(items, { open }) => {
                            console.log('items', items);
                            console.log('open', open);
                            return (
                                <Space align='center' onClick={open}>
                                    {items.every((item) => item === null) ? (
                                        <span style={{ color: '#bebbbf' }}>请选择是否医保</span>
                                    ) : (
                                        items.map((item) => item?.label ?? '未选择').join(' - ')
                                    )}
                                </Space>
                            );
                        }}
                    </Picker>
                </Form.Item>

                <Form.Item
                    className={styles.page_item}
                    rules={[{ required: true, message: '不能为空' }]}
                    name='outpatientVisits'
                    label='门诊量'
                >
                    <Input clearable onChange={console.log} placeholder='请填写门诊量' />
                </Form.Item>
                <Form.Item className={styles.page_item} name='numberOfBed' label='床位数'>
                    <Input clearable onChange={console.log} placeholder='请填写门诊量' />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    rules={[{ required: true, message: '不能为空' }]}
                    name='annualDosage'
                    label='年度用药量'
                >
                    <Input clearable onChange={console.log} placeholder='请填写年度用药量' />
                </Form.Item>

                <Form.Item className={styles.page_item} layout='vertical' name='remark' label='备注'>
                    <TextArea placeholder='备注(非必填)' showCount maxLength={100} className={styles.page_textArea} />
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
                <Form.Item className={styles.page_item} layout='vertical' name='productSituation' label='竞品情况'>
                    <TextArea placeholder='请输入竞品情况' showCount maxLength={500} className={styles.page_textArea} />
                </Form.Item>
                <Form.Item
                    className={styles.page_item}
                    name='potentialDosage'
                    label='潜在用药量'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <Input clearable onChange={console.log} placeholder='请填写潜在用药量' />
                </Form.Item>
                <Form.Item
                    name='opportunityAndChallenge'
                    label='机遇与挑战'
                    className={styles.page_item}
                    layout='vertical'
                    rules={[{ required: true, message: '不能为空' }]}
                >
                    <TextArea
                        className={styles.page_textArea}
                        placeholder='请输入机遇与挑战'
                        showCount
                        maxLength={500}
                    />
                </Form.Item>
                <Form.Header>
                    <div style={{ marginTop: 10 }} />
                </Form.Header>
                <Form.Item>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', marginRight: 41 }}>
                            <div style={{ width: 13.5, height: 15, border: '1px solid black' }} />
                            保存草稿
                        </div>
                        <Button
                            style={{
                                height: 40,
                                width: 96,
                                '--background-color': '#fff',
                                '--border': '0.5px solid #dfdddb',
                                '--border-radius': '20.5px',
                                '--text-color': '#454f4e',
                                fontSize: '16px',
                                marginRight: 16
                            }}
                        >
                            提交
                        </Button>
                        <Button
                            onClick={onSubmit}
                            type='submit'
                            style={{
                                width: 112,
                                '--background-color': '#f4f4f4',
                                '--border': '0.5px solid #dfdddb',
                                '--border-radius': '22px',
                                '--text-color': '#bebbbf',
                                fontSize: '16px'
                            }}
                        >
                            完成创建
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default InfoRegister;
