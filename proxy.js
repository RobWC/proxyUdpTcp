if (process.argv[2] && process.argv[3]) {
	var dgram = require('dgram'),
		server = dgram.createSocket('udp4'),
		net = require('net'),
		client = net.createConnection(parseInt(process.argv[3]));
	
	server.on('listening', function() {
		console.log('listening on port: ' + server.address().port);
		console.log('forwarding on port: ' + process.argv[3]);
	});
	
	server.on('message', function(msg, rinfo){
		client.write(msg);
		console.log('proxy: ' + msg.toString('utf8'));
	});
	
	server.bind(parseInt(process.argv[2]));
} else {
	console.log("Not enough arguments");
	console.log("node syslogProxy.js [udp listening port] [tcp forwarding port]");
}