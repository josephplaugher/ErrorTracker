import dbConn from './../../../util/postgres'

const GetAllErrors = (req, res, next) => {
	let Query = {
		text: `
		SELECT appname, message, level, timestamp, id
		FROM errors
        ORDER BY id DESC`
	}
	dbConn.query(Query).then((result) => {
		res.status(200).json({ errorList: result.rows })
	})
}

export default GetAllErrors
