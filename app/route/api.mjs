import express from "express"
import DataDiriController from "../controller/DataDiriController.mjs"

const api = express()

api.get("/data", DataDiriController.index);
api.post("/data/create", DataDiriController.store);
api.put("/edit/:id", DataDiriController.edit);
api.delete("/delete/:id", DataDiriController.destroy)

export default api