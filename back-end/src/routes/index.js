const { Router } = require("express");
const routes = Router();

const usersRouter = require("./users.routes")
const eventsRouter = require("./events.routes")
const tagsRouter = require("./tags.routes")
const sessionsRouter = require("./sessions.routes")

routes.use("/users", usersRouter)
routes.use("/sessions", sessionsRouter)
routes.use("/events", eventsRouter)
routes.use("/tags", tagsRouter)

module.exports = routes;