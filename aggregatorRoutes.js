import express from "express";

import {
    getDashboardData
} from "../controllers/dashboardController.js";

const appRouter = express.Router();

appRouter.get(
    "/dashboard/:id",
    getDashboardData
);

export default appRouter;
