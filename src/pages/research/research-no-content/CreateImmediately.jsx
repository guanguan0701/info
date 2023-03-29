import { ActionSheet, Button } from 'antd-mobile';
import React from 'react';

const CreateImmediately = () => {
    const actions = [
        { text: '新建', key: 'new' },
        { text: '草稿箱', key: 'drafts' }
    ];
    const [visible, setVisible] = React.useState(false);
    const creactAction = () => {
        setVisible(true);
    };
    return (
        <>
            <Button color='primary' fill='none' size='mini' onClick={creactAction}>
                立即创建
            </Button>
            <ActionSheet cancelText='取消' visible={visible} actions={actions} onClose={() => setVisible(false)} />
        </>
    );
};

export default CreateImmediately;
