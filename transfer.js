// transfer.js

module.exports = transfer;

function transfer (input, output) {
	
	var fs = require('fs'),
		rs = fs.createReadStream(input),
		ws = fs.createWriteStream(output),
		store;

	rs.on('readable', function () {
		var str,
			d = rs.read()

		if (d) {
			if (typeof d == 'string') {
				str = d 
			} else if (typeof d == 'object' && d instanceof Buffer) {
				str = d.toString('utf8')
			}

			if (str) {
				ws.write(d)

				// // memory store option
				// if (!store) {
				// 	store = d
				// } else {
				// 	store += str
				// }
			}
		}
	})

	rs.on('end', function () {
		// console.log(store.toString('utf8'))
		console.log('transfer complete')
		ws.end()
		
	})	
}





