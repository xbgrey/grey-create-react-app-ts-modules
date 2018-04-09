import { Agent, Request, Response } from 'src/frame/server';
import { CallType } from 'src/utils/ajax';
import IData from './IData';
import IOptions from './IOptions';

export default async function demo(target:any, option: IOptions): Promise<IData> {

    const req: Request = new Request(target, CallType.GET, 'xxxx', option);
    const res: Response = await Agent.instance.callZone(req);
    if (res.er) {
        return null;
    } else {
        return new Data(res.body);
    }
}

class Data implements IData {

    public value1: number;

    public value2: number;

    constructor(body: any) {

    }
}