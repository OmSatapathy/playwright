import{test,request,expect} from '@playwright/test'

test('verify put request', async({request})=>{

    const url ='https://api.restful-api.dev/objects/ff808181932badb601956e9fe59f0ae4'
    const payload ={
        "name": "Apple MacBook Pro 18",
        "data": {
           "year": 2009,
           "price": 2049.99,
           "CPU model": "Intel Core i10",
           "Hard disk size": "1 TB",
           "color": "silver"
        }
     }
     const response =   await request.put(url,{
                    headers:{'content-type':"application/json"},
                    data:payload
                   })

        const responseBody= await response.json()
       console.log(responseBody)

})