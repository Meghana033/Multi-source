import express from "express";

import {
    fetchProfile,
    fetchOrders,
    fetchTrendingProducts
} from "../controllers/serviceController.js";

const serviceRouter = express.Router();


// Profile Route
serviceRouter.get(
    "/profiles/:id",
    fetchProfile
);


// Orders Route
serviceRouter.get(
    "/profiles/:id/orders",
    fetchOrders
);


// Trending Products Route
serviceRouter.get(
    "/products/trending",
    fetchTrendingProducts
);

export default serviceRouter;
