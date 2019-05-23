
import CONSTANTS from "_constants/index"
export function create(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/app/create",
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
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"appId\": \"appId_9\",\n        \"appName\": \"appName_9\",\n        \"appKey\": \"appKey_8\",\n        \"industryId\": \"industryId_5\",\n        \"description\": \"description_7\",\n        \"status\": 7\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}
export function details(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/app/details",
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
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {\n        \"appName\": \"appName_1\",\n        \"appKey\": \"appKey_6\",\n        \"description\": \"description_1\",\n        \"status\": null,\n        \"industryId\": \"industryId_5\",\n        \"appId\": \"appId_3\"\n    },\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function update(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/app/update",
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
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {},\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function delete_1(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"POST","dataType":"json"},{ 
        url: CONSTANTS.domain + "/app/delete",
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
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": {},\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}export function list(query, success, fail, complete, headers, others) {
    const app = getApp();
    let config = Object.assign({}, {"headers":{"Content-Type":"application/json","forwardUrl":"www.baidu.com"},"method":"GET","dataType":"json"},{ 
        url: CONSTANTS.domain + "/app/list",
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
    return false ? (my.httpRequest || my.request)(options) : success(JSON.parse("{\n    \"code\": 0,\n    \"data\": [\n        {\n            \"appId\": \"appId_1\",\n            \"appName\": \"appName_7\",\n            \"appKey\": \"appKey_6\",\n            \"isAdmin\": 3,\n            \"industryId\": \"industryId_3\",\n            \"preview\": {\n                \"todayUv\": 6,\n                \"todayPv\": 3,\n                \"todayNewUser\": 2\n            }\n        },\n        {\n            \"appId\": \"appId_5\",\n            \"appName\": \"appName_2\",\n            \"appKey\": \"appKey_9\",\n            \"isAdmin\": 2,\n            \"industryId\": \"industryId_5\",\n            \"preview\": {\n                \"todayUv\": 2,\n                \"todayPv\": 4,\n                \"todayNewUser\": 4\n            }\n        }\n    ],\n    \"msg\": \"mock请求成功\",\n    \"success\": true\n}"))
}