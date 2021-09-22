import express from "express"
import DashboardController from "../controller/DashboardController.mjs"

const route = express.Router()

route.get("/dashboard", DashboardController.dashboard)
route.get("/dataDiri", DashboardController.getDataDiri)

export default route