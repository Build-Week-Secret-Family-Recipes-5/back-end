const supertest = require("supertest")
const db = require("../database/config")
const server = require("../server/server")

afterAll(async () => {
    await db.destroy()
})



describe("testing the register and login endpoints", () => {
    test("testing the register endpoint", async() => {
        const endpoint = "/api/auth/register"
        const data = { username: "samim2020", email: "samim2020@gmail.com", password: "samim2020" }

        const res = await supertest(server).post(endpoint).send(data)

        expect(res.statusCode).toBe(409)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("User is already taken!")
    })

    test("testing the login endpoint", async() => {
        const endpoint = "/api/auth/login"
        const data = { username: "samim2021", password: "samim2021" }

        const res = await supertest(server).post(endpoint).send(data)

        expect(res.statusCode).toBe(401)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("Invalid credentials!")
    })
})