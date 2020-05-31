const db = require("../database/config")
const users = require("../auth-routers/authDataModel")

afterAll(async () => {
    await db.destroy()
});

describe("USER MODELS", () => {
    describe("adds to database", () => {
        beforeEach(async () => {
            await db("users").truncate();

        });
        it("adds plants to database", async () => {
            await db("users").insert({
                username: "fnumilat",
                email: "fnumilat@gmail.com",
                password: "test1"
            })
        })
    })
})