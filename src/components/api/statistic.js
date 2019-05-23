
import CONSTANTS from "_constants/index"
export function phone_type_data(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/phone_type_data",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"nuData\": [\n            {\n                \"key\": \"key_6\",\n                \"value\": 1\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 2\n            }\n        ],\n        \"auData\": [\n            {\n                \"key\": \"key_4\",\n                \"value\": 0\n            },\n            {\n                \"key\": \"key_6\",\n                \"value\": 0\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 2\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 2\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 0\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 4\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 6\n            }\n        ]\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}
export function os_data(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/os_data",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"nuData\": [\n            {\n                \"key\": \"key_0\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 9\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 0\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 2\n            },\n            {\n                \"key\": \"key_1\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 9\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 1\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 6\n            }\n        ],\n        \"auData\": [\n            {\n                \"key\": \"key_7\",\n                \"value\": 1\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 2\n            }\n        ]\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function page_visit(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/page_visit",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"pv\": [\n            {\n                \"key\": \"key_3\",\n                \"value\": 6\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 2\n            },\n            {\n                \"key\": \"key_1\",\n                \"value\": 2\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 2\n            },\n            {\n                \"key\": \"key_6\",\n                \"value\": 9\n            },\n            {\n                \"key\": \"key_1\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_6\",\n                \"value\": 4\n            },\n            {\n                \"key\": \"key_6\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 1\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 6\n            },\n            {\n                \"key\": \"key_1\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_6\",\n                \"value\": 4\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 6\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 7\n            }\n        ],\n        \"uv\": [\n            {\n                \"key\": \"key_8\",\n                \"value\": 6\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 1\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 0\n            }\n        ],\n        \"avgStayTime\": [\n            {\n                \"key\": \"key_9\",\n                \"value\": 9\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 2\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 0\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 2\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 1\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 0\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 9\n            }\n        ],\n        \"outTimes\": [\n            {\n                \"key\": \"key_9\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 6\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 2\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 4\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 9\n            },\n            {\n                \"key\": \"key_1\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 1\n            }\n        ]\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function realtime_data(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/realtime_data",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"pv\": [\n            {\n                \"key\": \"key_5\",\n                \"value\": 5,\n                \"yesterday\": 3\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 5,\n                \"yesterday\": 7\n            }\n        ],\n        \"uv\": [\n            {\n                \"key\": \"key_2\",\n                \"value\": 6,\n                \"yesterday\": 8\n            },\n            {\n                \"key\": \"key_1\",\n                \"value\": 9,\n                \"yesterday\": 4\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 1,\n                \"yesterday\": 2\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 8,\n                \"yesterday\": 2\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 0,\n                \"yesterday\": 6\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 8,\n                \"yesterday\": 8\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 7,\n                \"yesterday\": 7\n            }\n        ],\n        \"uvAll\": 6,\n        \"pvAll\": 1,\n        \"pvRate\": 5,\n        \"uvRate\": 7\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function access_data(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/access_data",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"uvDay\": [\n            {\n                \"key\": \"key_0\",\n                \"value\": 8,\n                \"rate\": 7\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 5,\n                \"rate\": 1\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 2,\n                \"rate\": 9\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 9,\n                \"rate\": 6\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 2,\n                \"rate\": 1\n            }\n        ],\n        \"pvDay\": [\n            {\n                \"key\": \"key_6\",\n                \"value\": 3,\n                \"rate\": 7\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 8,\n                \"rate\": 0\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 0,\n                \"rate\": 3\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 7,\n                \"rate\": 6\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 8,\n                \"rate\": 3\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 8,\n                \"rate\": 5\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 5,\n                \"rate\": 4\n            },\n            {\n                \"key\": \"key_1\",\n                \"value\": 8,\n                \"rate\": 2\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 2,\n                \"rate\": 0\n            }\n        ],\n        \"nuDay\": [\n            {\n                \"key\": \"key_9\",\n                \"value\": 2,\n                \"rate\": 8\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 9,\n                \"rate\": 5\n            },\n            {\n                \"key\": \"key_6\",\n                \"value\": 4,\n                \"rate\": 6\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 8,\n                \"rate\": 4\n            },\n            {\n                \"key\": \"key_1\",\n                \"value\": 1,\n                \"rate\": 7\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 3,\n                \"rate\": 3\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 0,\n                \"rate\": 8\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 3,\n                \"rate\": 7\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 6,\n                \"rate\": 2\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 8,\n                \"rate\": 0\n            }\n        ],\n        \"nuAll\": 4,\n        \"pvAll\": 9,\n        \"uvAll\": 2\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function retain_trend(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/retain_trend",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"nuData\": [\n            {\n                \"list\": [],\n                \"key\": 4\n            },\n            {\n                \"list\": [\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 9\n                    },\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 7\n                    },\n                    {\n                        \"date\": \"date_3\",\n                        \"rate\": 4\n                    },\n                    {\n                        \"date\": \"date_0\",\n                        \"rate\": 1\n                    },\n                    {\n                        \"date\": \"date_6\",\n                        \"rate\": 1\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 1\n                    },\n                    {\n                        \"date\": \"date_7\",\n                        \"rate\": 4\n                    },\n                    {\n                        \"date\": \"date_5\",\n                        \"rate\": 9\n                    },\n                    {\n                        \"date\": \"date_6\",\n                        \"rate\": 2\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 5\n                    }\n                ],\n                \"key\": 3\n            },\n            {\n                \"list\": [\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 6\n                    },\n                    {\n                        \"date\": \"date_2\",\n                        \"rate\": 4\n                    },\n                    {\n                        \"date\": \"date_5\",\n                        \"rate\": 2\n                    },\n                    {\n                        \"date\": \"date_0\",\n                        \"rate\": 5\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 8\n                    },\n                    {\n                        \"date\": \"date_8\",\n                        \"rate\": 2\n                    },\n                    {\n                        \"date\": \"date_3\",\n                        \"rate\": 8\n                    },\n                    {\n                        \"date\": \"date_9\",\n                        \"rate\": 4\n                    },\n                    {\n                        \"date\": \"date_5\",\n                        \"rate\": 6\n                    },\n                    {\n                        \"date\": \"date_0\",\n                        \"rate\": 3\n                    }\n                ],\n                \"key\": 7\n            },\n            {\n                \"list\": [\n                    {\n                        \"date\": \"date_9\",\n                        \"rate\": 1\n                    },\n                    {\n                        \"date\": \"date_8\",\n                        \"rate\": 5\n                    },\n                    {\n                        \"date\": \"date_0\",\n                        \"rate\": 8\n                    },\n                    {\n                        \"date\": \"date_6\",\n                        \"rate\": 1\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 3\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 6\n                    },\n                    {\n                        \"date\": \"date_5\",\n                        \"rate\": 9\n                    },\n                    {\n                        \"date\": \"date_8\",\n                        \"rate\": 9\n                    },\n                    {\n                        \"date\": \"date_2\",\n                        \"rate\": 3\n                    },\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 5\n                    },\n                    {\n                        \"date\": \"date_9\",\n                        \"rate\": 8\n                    }\n                ],\n                \"key\": 4\n            },\n            {\n                \"list\": [],\n                \"key\": 6\n            },\n            {\n                \"list\": [\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 4\n                    },\n                    {\n                        \"date\": \"date_6\",\n                        \"rate\": 1\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 8\n                    },\n                    {\n                        \"date\": \"date_9\",\n                        \"rate\": 6\n                    },\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 4\n                    },\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 5\n                    },\n                    {\n                        \"date\": \"date_8\",\n                        \"rate\": 3\n                    }\n                ],\n                \"key\": 8\n            },\n            {\n                \"list\": [\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 9\n                    },\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 6\n                    },\n                    {\n                        \"date\": \"date_6\",\n                        \"rate\": 4\n                    },\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 5\n                    },\n                    {\n                        \"date\": \"date_5\",\n                        \"rate\": 3\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 6\n                    },\n                    {\n                        \"date\": \"date_7\",\n                        \"rate\": 7\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 5\n                    },\n                    {\n                        \"date\": \"date_7\",\n                        \"rate\": 6\n                    },\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 1\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 2\n                    },\n                    {\n                        \"date\": \"date_0\",\n                        \"rate\": 2\n                    }\n                ],\n                \"key\": 8\n            }\n        ],\n        \"auData\": [\n            {\n                \"list\": [\n                    {\n                        \"date\": \"date_6\",\n                        \"rate\": 4\n                    },\n                    {\n                        \"date\": \"date_3\",\n                        \"rate\": 5\n                    },\n                    {\n                        \"date\": \"date_7\",\n                        \"rate\": 5\n                    },\n                    {\n                        \"date\": \"date_2\",\n                        \"rate\": 7\n                    },\n                    {\n                        \"date\": \"date_0\",\n                        \"rate\": 1\n                    },\n                    {\n                        \"date\": \"date_8\",\n                        \"rate\": 2\n                    },\n                    {\n                        \"date\": \"date_3\",\n                        \"rate\": 3\n                    },\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 1\n                    },\n                    {\n                        \"date\": \"date_7\",\n                        \"rate\": 9\n                    },\n                    {\n                        \"date\": \"date_6\",\n                        \"rate\": 8\n                    },\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 6\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 7\n                    }\n                ],\n                \"key\": 5\n            },\n            {\n                \"list\": [\n                    {\n                        \"date\": \"date_3\",\n                        \"rate\": 7\n                    },\n                    {\n                        \"date\": \"date_9\",\n                        \"rate\": 8\n                    },\n                    {\n                        \"date\": \"date_3\",\n                        \"rate\": 6\n                    },\n                    {\n                        \"date\": \"date_9\",\n                        \"rate\": 8\n                    }\n                ],\n                \"key\": 3\n            },\n            {\n                \"list\": [\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 4\n                    },\n                    {\n                        \"date\": \"date_7\",\n                        \"rate\": 6\n                    },\n                    {\n                        \"date\": \"date_6\",\n                        \"rate\": 7\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 1\n                    },\n                    {\n                        \"date\": \"date_9\",\n                        \"rate\": 4\n                    }\n                ],\n                \"key\": 9\n            },\n            {\n                \"list\": [\n                    {\n                        \"date\": \"date_2\",\n                        \"rate\": 0\n                    }\n                ],\n                \"key\": 1\n            },\n            {\n                \"list\": [\n                    {\n                        \"date\": \"date_0\",\n                        \"rate\": 8\n                    },\n                    {\n                        \"date\": \"date_8\",\n                        \"rate\": 9\n                    },\n                    {\n                        \"date\": \"date_4\",\n                        \"rate\": 3\n                    },\n                    {\n                        \"date\": \"date_7\",\n                        \"rate\": 7\n                    },\n                    {\n                        \"date\": \"date_0\",\n                        \"rate\": 7\n                    },\n                    {\n                        \"date\": \"date_9\",\n                        \"rate\": 4\n                    },\n                    {\n                        \"date\": \"date_5\",\n                        \"rate\": 7\n                    },\n                    {\n                        \"date\": \"date_1\",\n                        \"rate\": 7\n                    },\n                    {\n                        \"date\": \"date_3\",\n                        \"rate\": 0\n                    }\n                ],\n                \"key\": 0\n            },\n            {\n                \"list\": [],\n                \"key\": 2\n            }\n        ]\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function retain_data(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/retain_data",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"nuData\": [],\n        \"auData\": [\n            {\n                \"personNum\": 9,\n                \"retainList\": [\n                    {\n                        \"rate\": 2,\n                        \"personNum\": 3\n                    },\n                    {\n                        \"rate\": 0,\n                        \"personNum\": 0\n                    },\n                    {\n                        \"rate\": 2,\n                        \"personNum\": 3\n                    },\n                    {\n                        \"rate\": 0,\n                        \"personNum\": 7\n                    },\n                    {\n                        \"rate\": 6,\n                        \"personNum\": 9\n                    },\n                    {\n                        \"rate\": 4,\n                        \"personNum\": 3\n                    },\n                    {\n                        \"rate\": 9,\n                        \"personNum\": 2\n                    },\n                    {\n                        \"rate\": 1,\n                        \"personNum\": 5\n                    },\n                    {\n                        \"rate\": 6,\n                        \"personNum\": 3\n                    },\n                    {\n                        \"rate\": 6,\n                        \"personNum\": 8\n                    },\n                    {\n                        \"rate\": 3,\n                        \"personNum\": 2\n                    },\n                    {\n                        \"rate\": 9,\n                        \"personNum\": 3\n                    }\n                ],\n                \"key\": \"key_6\"\n            },\n            {\n                \"personNum\": 3,\n                \"retainList\": [\n                    {\n                        \"rate\": 1,\n                        \"personNum\": 3\n                    },\n                    {\n                        \"rate\": 3,\n                        \"personNum\": 8\n                    }\n                ],\n                \"key\": \"key_5\"\n            },\n            {\n                \"personNum\": 5,\n                \"retainList\": [\n                    {\n                        \"rate\": 7,\n                        \"personNum\": 6\n                    },\n                    {\n                        \"rate\": 7,\n                        \"personNum\": 5\n                    },\n                    {\n                        \"rate\": 2,\n                        \"personNum\": 2\n                    }\n                ],\n                \"key\": \"key_8\"\n            },\n            {\n                \"personNum\": 4,\n                \"retainList\": [\n                    {\n                        \"rate\": 3,\n                        \"personNum\": 9\n                    },\n                    {\n                        \"rate\": 2,\n                        \"personNum\": 9\n                    }\n                ],\n                \"key\": \"key_7\"\n            }\n        ]\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function time_on_session(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/time_on_session",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"auData\": {\n            \"duration\": [\n                {\n                    \"key\": \"key_8\",\n                    \"value\": 8\n                },\n                {\n                    \"key\": \"key_9\",\n                    \"value\": 4\n                },\n                {\n                    \"key\": \"key_5\",\n                    \"value\": 7\n                },\n                {\n                    \"key\": \"key_1\",\n                    \"value\": 9\n                },\n                {\n                    \"key\": \"key_1\",\n                    \"value\": 6\n                },\n                {\n                    \"key\": \"key_8\",\n                    \"value\": 5\n                },\n                {\n                    \"key\": \"key_3\",\n                    \"value\": 6\n                },\n                {\n                    \"key\": \"key_9\",\n                    \"value\": 1\n                },\n                {\n                    \"key\": \"key_0\",\n                    \"value\": 5\n                },\n                {\n                    \"key\": \"key_0\",\n                    \"value\": 7\n                },\n                {\n                    \"key\": \"key_5\",\n                    \"value\": 4\n                },\n                {\n                    \"key\": \"key_2\",\n                    \"value\": 0\n                },\n                {\n                    \"key\": \"key_0\",\n                    \"value\": 4\n                },\n                {\n                    \"key\": \"key_3\",\n                    \"value\": 4\n                }\n            ]\n        },\n        \"nuData\": {\n            \"duration\": [\n                {\n                    \"key\": \"key_8\",\n                    \"value\": 5\n                },\n                {\n                    \"key\": \"key_9\",\n                    \"value\": 4\n                },\n                {\n                    \"key\": \"key_8\",\n                    \"value\": 2\n                },\n                {\n                    \"key\": \"key_0\",\n                    \"value\": 9\n                },\n                {\n                    \"key\": \"key_0\",\n                    \"value\": 8\n                },\n                {\n                    \"key\": \"key_9\",\n                    \"value\": 5\n                },\n                {\n                    \"key\": \"key_4\",\n                    \"value\": 5\n                },\n                {\n                    \"key\": \"key_4\",\n                    \"value\": 2\n                },\n                {\n                    \"key\": \"key_4\",\n                    \"value\": 6\n                },\n                {\n                    \"key\": \"key_2\",\n                    \"value\": 1\n                }\n            ]\n        }\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function time_on_date(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/time_on_date",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"auData\": {\n            \"duration\": []\n        },\n        \"nuData\": {\n            \"duration\": [\n                {\n                    \"key\": \"key_0\",\n                    \"value\": 4\n                },\n                {\n                    \"key\": \"key_7\",\n                    \"value\": 6\n                },\n                {\n                    \"key\": \"key_0\",\n                    \"value\": 7\n                }\n            ]\n        }\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function event_analyze(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/event_analyze",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": [\n        {\n            \"eventName\": \"eventName_7\",\n            \"eventID\": \"eventID_6\",\n            \"times\": 1,\n            \"personNum\": 2,\n            \"rate\": 9,\n            \"avgTimes\": 8\n        },\n        {\n            \"eventName\": \"eventName_4\",\n            \"eventID\": \"eventID_1\",\n            \"times\": 1,\n            \"personNum\": 9,\n            \"rate\": 7,\n            \"avgTimes\": 3\n        },\n        {\n            \"eventName\": \"eventName_0\",\n            \"eventID\": \"eventID_8\",\n            \"times\": 5,\n            \"personNum\": 3,\n            \"rate\": 8,\n            \"avgTimes\": 0\n        },\n        {\n            \"eventName\": \"eventName_1\",\n            \"eventID\": \"eventID_1\",\n            \"times\": 9,\n            \"personNum\": 2,\n            \"rate\": 8,\n            \"avgTimes\": 5\n        },\n        {\n            \"eventName\": \"eventName_2\",\n            \"eventID\": \"eventID_5\",\n            \"times\": 2,\n            \"personNum\": 5,\n            \"rate\": 0,\n            \"avgTimes\": 9\n        },\n        {\n            \"eventName\": \"eventName_1\",\n            \"eventID\": \"eventID_5\",\n            \"times\": 0,\n            \"personNum\": 3,\n            \"rate\": 1,\n            \"avgTimes\": 6\n        },\n        {\n            \"eventName\": \"eventName_8\",\n            \"eventID\": \"eventID_2\",\n            \"times\": 4,\n            \"personNum\": 9,\n            \"rate\": 7,\n            \"avgTimes\": 4\n        },\n        {\n            \"eventName\": \"eventName_2\",\n            \"eventID\": \"eventID_8\",\n            \"times\": 2,\n            \"personNum\": 4,\n            \"rate\": 3,\n            \"avgTimes\": 7\n        },\n        {\n            \"eventName\": \"eventName_0\",\n            \"eventID\": \"eventID_8\",\n            \"times\": 7,\n            \"personNum\": 1,\n            \"rate\": 7,\n            \"avgTimes\": 3\n        },\n        {\n            \"eventName\": \"eventName_0\",\n            \"eventID\": \"eventID_5\",\n            \"times\": 0,\n            \"personNum\": 3,\n            \"rate\": 2,\n            \"avgTimes\": 1\n        },\n        {\n            \"eventName\": \"eventName_0\",\n            \"eventID\": \"eventID_2\",\n            \"times\": 1,\n            \"personNum\": 7,\n            \"rate\": 1,\n            \"avgTimes\": 6\n        },\n        {\n            \"eventName\": \"eventName_6\",\n            \"eventID\": \"eventID_3\",\n            \"times\": 4,\n            \"personNum\": 2,\n            \"rate\": 2,\n            \"avgTimes\": 7\n        },\n        {\n            \"eventName\": \"eventName_7\",\n            \"eventID\": \"eventID_8\",\n            \"times\": 7,\n            \"personNum\": 2,\n            \"rate\": 2,\n            \"avgTimes\": 0\n        },\n        {\n            \"eventName\": \"eventName_2\",\n            \"eventID\": \"eventID_5\",\n            \"times\": 1,\n            \"personNum\": 1,\n            \"rate\": 3,\n            \"avgTimes\": 4\n        }\n    ],\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function page_num(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/page_num",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"auData\": {\n            \"duration\": [\n                {\n                    \"key\": \"key_9\",\n                    \"value\": 6\n                },\n                {\n                    \"key\": \"key_2\",\n                    \"value\": 2\n                }\n            ]\n        },\n        \"nuData\": {\n            \"duration\": [\n                {\n                    \"key\": \"key_4\",\n                    \"value\": 7\n                },\n                {\n                    \"key\": \"key_5\",\n                    \"value\": 9\n                },\n                {\n                    \"key\": \"key_9\",\n                    \"value\": 7\n                },\n                {\n                    \"key\": \"key_4\",\n                    \"value\": 2\n                },\n                {\n                    \"key\": \"key_2\",\n                    \"value\": 0\n                },\n                {\n                    \"key\": \"key_3\",\n                    \"value\": 0\n                }\n            ]\n        }\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function access_time(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/access_time",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"date\": [\n            {\n                \"key\": \"key_4\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 9\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 0\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 3\n            }\n        ],\n        \"week\": [\n            {\n                \"key\": \"key_1\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_1\",\n                \"value\": 9\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 0\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 1\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 6\n            }\n        ],\n        \"month\": [\n            {\n                \"key\": \"key_0\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 1\n            },\n            {\n                \"key\": \"key_6\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_8\",\n                \"value\": 4\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_7\",\n                \"value\": 0\n            }\n        ]\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function page_by_time(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/page_by_time",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"stayTime\": [\n            {\n                \"key\": \"key_0\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_1\",\n                \"value\": 6\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 0\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 1\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 5\n            },\n            {\n                \"key\": \"key_3\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 0\n            }\n        ]\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function funnel(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/funnel",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function page_by_pv(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/page_by_pv",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"pv\": [\n            {\n                \"key\": \"key_5\",\n                \"value\": 5\n            }\n        ]\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function page_by_uv(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/statistic/page_by_uv",
        headers: Object.assign({}, {"Content-Type":"application/json","forwardUrl":"www.baidu.com"}, headers || {})})
    if (query.token) { config.headers.token = query.token }

    delete query.token
    let _query = query;

    config.headers["content-type"] = config.headers["Content-Type"]
    if(config.headers["content-type"] === "application/json" ) {
    _query = JSON.stringify(_query)
    }

    delete config.headers["Content-Type"]

    const _others = Object.assign({timeout: 3000}, others);
    const options = Object.assign({}, config, {data: _query}, _others, {
        success: resp => {
        const data = resp.data || {}
        if (data.code == '0') {
            success && success(data.data, data)
        } else if (data.code == '1002') {
            // token失效 重新获取鉴权 重新调用数据
            app.checkAuth('auth_base').then(({ token = '', user={} }) => {
            // 数据更新
            app.CONSTANTS.token = token;
            app.CONSTANTS.userInfo = user;

            my.request(Object.assign({}, config, { data: query }, _others,
            {
                success: responese => {
                const data_ = responese.data || {}
                success(data_.data, data_)
                },
                fail: fail || function(err){
                    let msg = err.msg;
                    if(typeof err === "number") {
                        msg = {
                            11: "无权跨域",
                            12: "网络出错",
                            13: "超时",
                            14: "解码失败",
                            19: "HTTP错误",
                            20: "请求已被停止/服务端限流"
                        }[err]
                    }
                    my.showToast({
                        type: 'fail',
                        content: msg || '系统异常,请稍后再试'
                    })
                },
                complete: complete
            }
            ))
            }).catch(() => {
            my.showToast({ content: '系统异常' })
            })
        } else {
            fail(data, resp)
        }
        },
        fail: fail || function(err, resp){
            let msg = err.msg;
            if(typeof err === "number") {
                msg = {
                    11: "无权跨域",
                    12: "网络出错",
                    13: "超时",
                    14: "解码失败",
                    19: "HTTP错误",
                    20: "请求已被停止/服务端限流"
                }[err]
            }
            my.showToast({
                type: 'fail',
                content: msg || '系统异常,请稍后再试'
            })
        },
        complete: complete,
    })
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"uv\": [\n            {\n                \"key\": \"key_3\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_9\",\n                \"value\": 3\n            },\n            {\n                \"key\": \"key_0\",\n                \"value\": 8\n            },\n            {\n                \"key\": \"key_4\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_2\",\n                \"value\": 2\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 7\n            },\n            {\n                \"key\": \"key_5\",\n                \"value\": 3\n            }\n        ]\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}