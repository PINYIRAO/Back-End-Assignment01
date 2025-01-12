import request from "supertest";
import { Response } from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("shoud return Hello, welcome to Back-End world", async () => {
    const response: Response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toMatch(/Hello.*world/i);
  });
});

describe("GET /api/v1/health", () => {
  it("should return server health status", async () => {
    // create GET request to health endpoint
    const response: Response = await request(app).get("/api/v1/health");

    // assert response status OK and health object to have specified properties
    expect(response.status).toBe(200);
    expect(response.body.status).toMatch(/ok/i);
    expect(response.body.uptime).toBeGreaterThanOrEqual(0);
    expect(response.body).toHaveProperty("timestamp");
    expect(response.body).toHaveProperty("version");
  });
});
