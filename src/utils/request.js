import { setConfig, setMessage } from '@pigjs/request';
import { Toast } from 'antd-mobile';
import axios from 'axios';

// 初始化请求库配置
setConfig({
    requestType: 'axios',
    // errorCode: {
    //     // 错误状态
    //     401: () => {
    //         // 未登录
    //     },
    //     502: () => {
    //         // 服务器部署中
    //     },
    //     504: () => {
    //         // 请求超时
    //     }
    // },
    headers: () => {
        // headers 配置
        // 可以设置token等
    },
    resKeys: {
        // 后端返回到格式
        code: 'status',
        data: 'data',
        message: 'message'
    },
    requestInstance: axios
});

setMessage({
    loading: (content) => {
        Toast.show({ content, icon: 'loading', duration: 0 });
    },
    destroy: () => {
        Toast.clear();
    },
    error: (content) => {
        Toast.show({ content, icon: 'fail', duration: 3000 });
    }
});
