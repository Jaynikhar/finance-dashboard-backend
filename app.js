import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
// import { swaggerSpec } from "./src/config/swagger.js";
import swaggerSpec from "./src/config/swagger.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import recordRoutes from "./src/routes/recordRoutes.js";
import analyticsRoutes from "./src/routes/analyticsRoutes.js";
import { asyncHandler } from "./src/utils/asyncHandler.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/records", analyticsRoutes);
app.use(errorHandler);
app.use(asyncHandler);

export default app;