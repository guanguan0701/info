import request from '@pigjs/request';

/** demo */
export function getDemo() {
    return request(
        {
            url: 'https://www.fastmock.site/mock/5a2b9135279205350708ef5962a80d97/api/getTableList'
        },
        {
            // 当前接口请求的时候需要加 loading
            needLoading: true
        }
    );
}
