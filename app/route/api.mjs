import express from "express"
import DataDiriController from "../controller/DataDiriController.mjs"

const api = express()

api.get("/data", DataDiriController.index);

export default api