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
