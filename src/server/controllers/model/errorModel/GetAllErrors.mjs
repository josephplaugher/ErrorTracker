import dbConn from './../../../util/postgres'

const GetAllErrors = (req, res, next) => {
	let Query = {
		text: `
		SELECT appname, message, level, timestamp, id
		FROM errors
        ORDER BY timestamp ASC`
	}
	dbConn.query(Query).then((result) => {
		//console.log('db error: ', JSON.parse(result.rows[0].error))
		res.status(200).json({ errorList: result.rows })
	})
}

export default GetAllErrors
