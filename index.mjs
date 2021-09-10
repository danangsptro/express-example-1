import mongoose from "./app/config/mongodb.mjs"
import express from "express"
import dotenv from "dotenv"
import vhost from "vhost"
import apiRoute from "./app/route/api.mjs"


mongoose
dotenv.config();
const app = express();
const PORT = process.env.APP_PORT
const HOST = process.env.APP_HOST

app.use(vhost(process.env.VHOST_SERVICE, apiRoute));

app.listen(PORT, () => {
    console.log(`App listen app at http://${HOST}:${PORT}`);
})
