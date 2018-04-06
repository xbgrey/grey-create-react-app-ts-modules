/**
 * 配置节点接口
 */
export default interface INode{
    rootConfig:RootConfig
}

interface RootConfig{
    DEV_URI:string;
    API_URI:string;
    TEST_URI:string;
}