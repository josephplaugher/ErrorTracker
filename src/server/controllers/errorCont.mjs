import express from 'express'
import GetAllErrors from './model/errorModel/GetAllErrors'
const routes = express.Router()

routes.get('/getAllErrors', GetAllErrors)

export default routes
