import ajax from '@/api/ajax'


export function login(params) {
    return ajax({
        url: '/user/login',
        method: 'post',
        params
    })
}
