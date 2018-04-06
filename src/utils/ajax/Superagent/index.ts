import * as request from 'superagent';
import CallType from '../CallType';
import JSObject from '../kit/JSObject';

/**
 * 请求服务器
 * @param type 请求类型
 * @param uri 地址
 * @param fnCallback 回调函数
 * @param params 参数
 * @param options 请求头
 */
function fnCall(type:CallType, uri:string, fnCallback:(er:any, body:any)=>void, params:any, options:any = {}) {
    options = {
        'Content-Type': 'application/json',
        ...options,
    };
    
    params = JSObject.getClearBlankParas(params);

    request[type](uri)
        .set(options)[type === 'get' ? 'query' : 'send'](params)
        .end((err, res) => {
            if (err) {
                console.error('[ajax.Superagent]',err);
                fnCallback(err, null);
            } else {
                fnCallback(null, res.body);}
        })
        .timeout(5000);
}

export default {
    fnCall
}