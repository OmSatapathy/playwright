import { test, expect, request } from '@playwright/test'

test('verify post test', async ({ request }) => {
    const body = {
        "name": "Leo",
        "age": 26
    }
    const resp = await request.post("https://reqres.in/api/users",
        { headers: { "Content-Type": "application/json" }, data: body })

    const responsejson = await resp.json()
    console.log(responsejson)

    for (const value of responsejson) {
        console.log(value)
    }

})


test(`validate get request`, async ({ request }) => {

    const res = await request.get("https://jsonplaceholder.typicode.com/comments?postId=1",
        { headers: { "Content-Type": "application/json" } })

    const respjson = await res.json()


    respjson.forEach((element: any) => {

        console.log(element.name)

    });

    respjson.forEach((ele: any) => {
        expect(ele).toHaveProperty('id')
        expect(ele).toHaveProperty('email')
        expect(ele).toHaveProperty('email')
        expect(ele).toHaveProperty('body')


    })

    respjson.forEach((element: any) => {
        console.log(element.email)
    });


})