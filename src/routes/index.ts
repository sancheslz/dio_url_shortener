import { Express } from 'express'
import urlsRoute from "./urls.routes"

function routes(app: Express) {
  app.use('/', urlsRoute)
}

export default routes
