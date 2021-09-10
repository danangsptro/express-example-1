const express = require('express');
const dotenv =  require('dotenv')
dotenv.config();

const app = express();
const PORT = process.env.APP_PORT
console.log(PORT);
const HOST = process.env.APP_HOST


app.listen(PORT, () => {
    console.log(`App listen app at http://${HOST}:${PORT}`);
})
