import express from "express"
import DataDiriController from "../controller/DataDiriController.mjs"

const route = express.Router()

route.get("/", DataDiriController.testing)
route.get("/Test", DataDiriController.testAja)

export default route