export default class Event {

    private _type: string;

    /** 消息类型 */
    public get type(): string {
        return this._type;
    }
}