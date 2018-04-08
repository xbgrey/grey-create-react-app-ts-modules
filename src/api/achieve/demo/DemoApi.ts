import { AipBasic, ApiRequest } from 'src/frame/api';
import { CallType } from 'src/utils/ajax';
import { Urls } from 'src/entry/constant';
import IDemoData from './IDemoData';
import IDemoOptions from './IDemoOptions';

export default class DemoApi extends AipBasic{
    constructor(option:IDemoOptions, callBack:(data:IDemoData)=>void){
        super();
        this.callZone(new ApiRequest(this, CallType.GET, Urls.demo, option));
    }
}