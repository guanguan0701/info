import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import React from 'react';
import { Outlet } from 'umi';

import 'antd-mobile/es/global';
import './default.less';
import './global.less';

export default () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Outlet />
        </ConfigProvider>
    );
};
