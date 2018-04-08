/** 模块临时节点名称 */
const TEMPORARY_NAME:string = 'sisplay/modules/Home';

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

export default {
    columns,
    TEMPORARY_NAME,
}