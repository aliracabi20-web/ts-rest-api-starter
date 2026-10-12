import express, { Request, Response } from "express";
import { ApiResponse, HealthCheckStatus } from "./types.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  const status: ApiResponse<HealthCheckStatus> = {
    success: true,
    data: {
      status: "healthy",
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "development"
    },
    timestamp: new Date().toISOString()
  };
  res.json(status);
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
