const supertest = require("supertest")
const server = require("../server/server")



test("testing the Welcome Message endpoint", async () => {
    const endpoint = "/"

    const res = await supertest(server).get(endpoint)

    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
})
