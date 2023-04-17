import Http from '@/utils/request';

const API= {
    LOGIN: "/sayHello"
}

export default {
    login(params) {
        return Http.get(API.LOGIN, params);
    }
}
