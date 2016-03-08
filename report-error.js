const notify = require('gulp-notify')
const gutil  = require('gulp-util')

module.exports = function(error) {
	const lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : ''

	notify({
		title: 'Task failed [' + error.plugin + ']',
		message: lineNumber + 'See terminal.',
		sound: 'Sosumi'
	}).write(error)

	gutil.beep()

	const chalk = gutil.colors.white.bgRed

	const report = `
		${chalk('TASK:')} [${error.plugin}]
		${chalk('PROB:')} [${error.message}]
	`.trim()
	
	console.error(report)

	this.emit('end')
}
