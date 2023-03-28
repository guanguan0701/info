import request from '@pigjs/request';

/** demo */
export function getDemo() {
    return request(
        {
            url: '/api/getDemo'
        },
        {
            // 当前接口请求的时候需要加 loading
            needLoading: true
        }
    );
}
