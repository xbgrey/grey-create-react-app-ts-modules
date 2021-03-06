import { NodeEnvType } from 'src/entry/constant';

/**
 * 配置节点接口
 */
export default interface INode {

    /** 当前环境类型 */
    NODE_ENV: NodeEnvType;

    /** 是否开启mock数据 */
    IS_MOCK: boolean;

    /** API 网关 */
    DURL: string;
}