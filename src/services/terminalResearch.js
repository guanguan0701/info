import request from '@pigjs/request';

/** demo */
export function getResearchList() {
    return request({
        url: '/api/getResearchList'
    });
}
