const db = require("../database/config")
const users = require("../auth-routers/authDataModel")

afterAll(async () => {
    await db.destroy()
});


describe("Testing the authDataModel.js", () => {
    beforeEach(async () => {
        await db("users").truncate();

    });
    test("register a new user", async () => {
        await users.add({
            username: "fnumilat",
            email: "fnumilat@gmail.com",
            password: "fnumilat22"
        })
    })
    test("get the users", async () => {
        await users.find({
            username: "fnumilat",
            email: "fnumilat@gmail.com",
            password: "fnumilat22"
        })
    })
})
