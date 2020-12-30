const unixSocketService = require('./unix-socket-service');

unixSocketService.sendMsg('serverid', 'clientid', 'hello world');
