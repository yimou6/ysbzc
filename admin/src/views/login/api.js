import axios from '../../plugins/axios'

export function login(params) {
    return axios.post('/admin/login', params);
}
