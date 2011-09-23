if (process.argv[2]) {
	var net = require('net'),
		server = net.createServer(function(stream){
			stream.on('data', function(data){
				console.log('listener: ' + data.toString('utf8'));
			});
		});

	console.log('listening on port: ' + process.argv[2]); 
	server.listen(parseInt(process.argv[2]));	
} else {
	console.log("Not enough arguments");
	console.log("node tcpListener.js [tcp listening port]");
}
