import express from "express";

import config from "./config/config.js";

const app = express();

// server
app.set("port", config.PORT);

// Middleware
app.use(express.json());


export default app;