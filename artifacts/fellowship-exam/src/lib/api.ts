import { MOCK_DATA } from "./mockData";

const API_BASE = "/api";

export type Role =
  | "super_admin"
  | "program_admin"
  | "central_exam_coordinator"
  | "unit_coordinator"
  | "doctor"
  | "student";

export interface User {
  id: number;
  email: string;
  salutation: string | null;
  fullName: string;
  employeeId: string | null;
  designation: string | null;
  gender: string | null;
  avatarSeed: string | null;
  role: Role;
  unitId: number | null;
  unitName: string | null;
  programId: number | null;
  forcePasswordReset: boolean;
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

function getToken(): string | null {
  return localStorage.getItem("fellowship_token");
}

export function setToken(token: string): void {
  localStorage.setItem("fellowship_token", token);
}

export function clearToken(): void {
  localStorage.removeItem("fellowship_token");
}

// Mock Helpers
export function isMockEnabled(): boolean {
  return localStorage.getItem("fellowship_mock_enabled") === "true";
}

export function setMockEnabled(enabled: boolean): void {
  localStorage.setItem("fellowship_mock_enabled", enabled ? "true" : "false");
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  // INTERCEPT FOR MOCK DATA
  if (isMockEnabled() && (options.method === "GET" || !options.method)) {
    // Exact match or prefix match for some routes
    const mockKey = Object.keys(MOCK_DATA).find(k => path.startsWith(k));
    if (mockKey) {
      console.log(`[MOCK API] Intercepting GET ${path}`);
      return new Promise((resolve) => setTimeout(() => resolve(MOCK_DATA[mockKey as keyof typeof MOCK_DATA] as T), 300));
    }
  }

  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string> ?? {}),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }));
    throw new ApiError(res.status, body.error ?? res.statusText);
  }
  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body: unknown) => request<T>(path, { method: "POST", body: JSON.stringify(body) }),
  put: <T>(path: string, body: unknown) => request<T>(path, { method: "PUT", body: JSON.stringify(body) }),
  patch: <T>(path: string, body: unknown) => request<T>(path, { method: "PATCH", body: JSON.stringify(body) }),
  delete: <T>(path: string) => request<T>(path, { method: "DELETE" }),
  delete_body: <T>(path: string, body: unknown) => request<T>(path, { method: "DELETE", body: JSON.stringify(body) }),
};
