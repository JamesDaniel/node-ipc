const unixSocketService = require('./unix-socket-service');

unixSocketService.listen('serverid', (message) => {
    console.log('Got message! ' + message);
});
