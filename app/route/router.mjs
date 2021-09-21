import express from "express"
import DashboardController from "../controller/DashboardController.mjs"

const route = express.Router()

route.get("/Test", DashboardController.testAja)
route.get("/Testing", DashboardController.Hallo)

export default route