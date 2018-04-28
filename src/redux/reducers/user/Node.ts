import JSString from 'kts-scaffold-framework/utils/kit/JSString';

const search = window.document.location.search;

/**
 * 用户数据节点
 */
export default class Node {
    
    /** 用户的cToken */
    public cToken: string;

    /** 公司接口头 */
    public zoneUrl: string;

    constructor() {
        this.cToken = JSString.getQueryString(search, 'cToken');
        this.zoneUrl = JSString.getQueryString(search, 'zoneUrl');
    }
}