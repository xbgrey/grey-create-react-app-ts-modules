let env;
//process.argv[3]
switch ('debug') {
    case 'debug':
        env = require('./debug');
        break;

    case 'production':
        env = require('./production');
        break;

    case 'test':
        env = require('./test');
        break;

    default:
        env = require('./debug');
}

module.exports = JSON.stringify(env);