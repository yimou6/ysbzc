import axios from '../../plugins/axios'

export function list(params) {
    return axios.post('/admin/article/list', params)
}
