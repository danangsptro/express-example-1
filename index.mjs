import mongoose from "./app/config/mongodb.mjs"
import express from "express"
import dotenv from "dotenv"
import vhost from "vhost"
import apiRoute from "./app/route/api.mjs"
import bodyParser from "body-parser"
import route from "./app/route/router.mjs"
import path from "path"
const __dirname = path.resolve();

mongoose
dotenv.config();
const app = express();


const PORT = process.env.APP_PORT
const HOST = process.env.APP_HOST
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/app/public'));

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs')
// parse application/json
app.use(bodyParser.json())
app.use(vhost(process.env.VHOST_SERVICE, apiRoute))
app.use(vhost(process.env.APP_SERVICE, route))
// Template engine


app.listen(PORT, () => {
    console.log(`App listen app at http://${HOST}:${PORT}`);
})
