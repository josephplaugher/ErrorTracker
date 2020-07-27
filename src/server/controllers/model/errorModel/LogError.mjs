import dbConn from './../../../util/postgres'

const LogError = (req, res, next) => {
	let Query = {
		text: `
		INSERT INTO errors
			(appname, message, level)
		VALUES ($1,$2,$3)`,
		values: [req.get('host'), req.body.message, req.body.level]
	}
	dbConn.query(Query).then((result) => {
		res.status(200).json({ LoggedError: result })
	})
}

export default LogError
