// To-do: make loop every hour/minute
const exec = require('child_process').exec
exec('uptime -p', (error, stdout) => {
	if (error) {
		return
		console.error(`Terminal.js: ${error}`)
	}
	uptime = `${stdout}`
	//console.log('Executed uptime -p')
})