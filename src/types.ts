export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface HealthCheckStatus {
  status: "healthy" | "degraded";
  uptime: number;
  environment: string;
}
