const { Router } = require("express")
const eventsRoutes = Router();

const EventsController = require("../controllers/EventsController")
const eventsController = new EventsController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

eventsRoutes.use(ensureAuthenticated)

eventsRoutes.get("/", eventsController.index)
eventsRoutes.post("/", eventsController.create)
eventsRoutes.get("/:event_id", eventsController.show)
eventsRoutes.delete("/:event_id", eventsController.delete)



module.exports = eventsRoutes;