const localhost = 'http://localhost:8888/';
const head = 'https://config.kingxunlian.com/';

configName = 'demo'//process.argv[2] || 'demo';

/**获取配置文件地址*/
function getConfigUrl(){
    if(configName.slice(-4) === '_loc'){
        return localhost+configName.slice(0,-4)+'.js';
    }else{
        return head+configName+'.js';
    }
}

module.exports = getConfigUrl();
