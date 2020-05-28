const supertest = require("supertest")
const db = require("../database/config")
const server = require("../server/server")

afterAll(async () => {
    await db.destroy()
})



describe("testing the recipes endpoints", () => {
    test("testing the Get Recipes endpoint", async() => {
        const endpoint = "/api/recipes/"

        const res = await supertest(server).get(endpoint)

        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })

    test("testing the Get a Recipe by Id endpoint", async() => {
        const endpoint = "/api/recipes/:id"

        const res = await supertest(server).get(endpoint)

        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })

    test("testing the Create a Recipe endpoint", async() => {
        const endpoint = "/api/recipes/"
        const data = {"title": "Pumpkin Overnight Oats",
                      "ingredients": "½ cup oats, dry / ½ cup canned pumpkin / 3 TBSP orange juice / ½ teaspoon pumpkin pie spice / 2 teaspoons maple syrup / 1 TBSP dried cranberries / 1 TBSP pecans, chopped",
                      "instructions": "1 - Mix together oats, pumpkin, orange juice, spice, and maple syrup. 2 - Place in the refrigerator in a covered container and let sit overnight or for a few hours. When ready to eat, top with cranberries and pecans.",
                      "source": "fruitsandveggies.org",
                      "category": "Veggies",
                      "photo": "https://fruitsandveggies.org/wp-content/uploads/2019/10/leslie-Pumpkin-Overnight-Oats-sized-for-banner-1440x480.jpg"}

        const res = await supertest(server).post(endpoint).send(data)

        expect(res.statusCode).toBe(401)
        expect(res.type).toBe("application/json")
    })
})