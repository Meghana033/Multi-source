```js id="x8pl3d"
import express from "express";

import dashboardRoutes
from "./routes/dashboardRoutes.js";

import serviceRoutes
from "./routes/serviceRoutes.js";

const server = express();

server.use(express.json());


// Dashboard APIs
server.use(
    "/services",
    dashboardRoutes
);


// Mock Service APIs
server.use(
    "/services",
    serviceRoutes
);


const APP_PORT = 4000;

server.listen(APP_PORT, () => {

    console.log(
        `Application started on port ${APP_PORT}`
    );
});
```
