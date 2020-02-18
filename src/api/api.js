import axios from './http'

const video = {
    // 视频列表
    videoList (data) {
        return axios.get(`/ajax/comingList`,{
            params:data
        });
    },
    // 视频详情,演示
    videoDetail (id, params) {
        return axios.get(`${base.sq}/topic/${id}`, {
            params: params
        });
    }
}

const login = {
    // post提交
    login (params) {
        return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
    }
}

export {video, login}