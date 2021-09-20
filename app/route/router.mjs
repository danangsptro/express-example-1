import express from "express"
import DataDiriController from "../controller/DataDiriController.mjs"

const route = express.Router()
route.get("/", DataDiriController.testing)

export default route