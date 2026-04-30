const request = require("supertest");

describe("Integration Tests", () => {

  it("GET / should return 200", async () => {
    const res = await request("http://app:3000").get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello from Docker App");
  });

  it("GET /api/test should return success true", async () => {
    const res = await request("http://app:3000").get("/api/test");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

});