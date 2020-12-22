const ipc = require('node-ipc');

ipc.config.id = 'world';
ipc.config.retry= 1500;

ipc.serveNet(
    'udp4',
    function(){
        ipc.server.on(
            'message',
            function(data,socket){
                ipc.log('got a message from ', data.id ,' : ', data.message);
                ipc.server.emit(
                    socket,
                    'message',
                    {
                        id      : ipc.config.id,
                        message : data.message+' world!'
                    }
                );
            }
        );
    }
);

ipc.server.start();