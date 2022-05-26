import express, { Express } from 'express'
import cors from 'cors'
import runDb from './database/db'
import routes from './routes'

const app: Express = express()

app.use(express.json())
app.use(cors())

runDb()
routes(app)

app.listen(8000, () => {
  console.log('running')
})
