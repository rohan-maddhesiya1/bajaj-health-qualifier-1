import express from "express";
// import bfhlRoutes from "./routes/bfhl.routes.js";
import healthRoutes from "./routes/health.routes.js";

const app = express();

/* -------------------- Middlewares -------------------- */
app.use(express.json({ limit: "10kb" })); // Security guardrail

/* -------------------- Routes -------------------- */
// app.use("/bfhl", bfhlRoutes);
app.use("/health", healthRoutes);

/* -------------------- Global Error Handler -------------------- */
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    is_success: false,
    error: "Internal Server Error",
  });
});

export default app;
