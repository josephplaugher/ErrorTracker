import express from 'express'
import GetAllErrors from './model/errorModel/GetAllErrors'
import LogError from './model/errorModel/LogError'
const routes = express.Router()

routes.get('/getAllErrors', GetAllErrors)
routes.post('/logError', LogError)

export default routes
