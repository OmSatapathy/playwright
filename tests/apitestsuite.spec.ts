import { json } from "stream/consumers";

const { test, expect, request } = require('@playwright/test');

test(`verify 100 record`, async ({ request }: { request: any }) => {

    const url = "https://jsonplaceholder.typicode.com/posts"

    const response = await request.get(url, { header: { 'content-type': 'application/json' } })

    // console.log(await response.json())

    expect(response.status()).toBe(200)

    const jsonvalue = await response.json()

    jsonvalue.forEach((element: any) => {
        console.log(element.title)
    });


})


test("verify 10 users record", async ({ request }: { request: any }) => {

    const url = "https://jsonplaceholder.typicode.com/users"

    const res = await request.get('https://jsonplaceholder.typicode.com/users', { header: { 'content-type': 'application/json' } })

    console.log(await res.json())

    const jsonvalue = await res.json();

    expect(res.status()).toBe(200)


    jsonvalue.forEach((ele: any) => {
        console.log(ele.address.city)

    })

})


test('post request with body', async ({ request }: { request: any }) => {

    const url = "https://api.restful-api.dev/objects"
    const payload = {
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }

    const response = await request.post(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        data: payload   
    });
    
    const jsonvalue = await response.json()

    console.log(jsonvalue)



})