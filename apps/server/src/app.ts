import cors from "cors";
import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./utils/logger.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use(errorHandler);
