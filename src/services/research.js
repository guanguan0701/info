import request from '@pigjs/request';

/** demo */
export function getResearchList() {
    return request(
        {
            url: '/api/getResearchList'
        },
        {
            // 当前接口请求的时候需要加 loading
            needLoading: true
        }
    );
}
