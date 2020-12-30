const ipc = require('node-ipc');

ipc.config.id = 'hello';
ipc.config.retry= 1500;

ipc.serveNet(
    8001,
    'udp4',
    function(){
        ipc.server.on(
            'message',
            function(data){
                ipc.log('got Data');
                ipc.log('got a message from ', data.id ,' : ', data.message);
            }
        );
        ipc.server.emit(
            {
                address : 'localhost',
                port    : ipc.config.networkPort
            },
            'message',
            {
                id      : ipc.config.id,
                message : 'Hello'
            }
        );
    }
);

ipc.server.start();