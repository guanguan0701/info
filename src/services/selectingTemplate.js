import request from '@pigjs/request';

export function getTemplate() {
    return request({
        url: '/api/getTemplate '
    });
}
