import{test,expect,request} from '@playwright/test'

test('update details using patch',async({request})=>{

    const url ="https://api.restful-api.dev/objects/ff808181932badb601956e9fe59f0ae4"
    const payload = {
        "name": "Apple MacBook Pro 16 (Updated Name)"
     }

 const response=    await request.patch(url,{
        headers:{'content-type':"application/json"},
        data:payload
     })


 const responseBody=    await response.json()
 console.log(responseBody)
})