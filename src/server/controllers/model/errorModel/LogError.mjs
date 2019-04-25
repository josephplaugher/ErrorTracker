import dbConn from './../../../util/postgres'

const LogError = (req, res, next) => {
	console.log('logging new error: ')
	console.log('message: ', req.body.message)
	console.log('level: ', req.body.level)
	let Query = {
		text: `
		INSERT INTO errors
			(appname, message, level)
		VALUES ('test', $1,$2)`,
		values: [req.body.message, req.body.level]
	}
	dbConn.query(Query).then((result) => {
		res.status(200).json({ LoggedError: result })
	})
}

export default LogError
