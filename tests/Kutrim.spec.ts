import {test,expect} from '../fixtures/createaccount.fixture'
import kutrimuser from '../testdata/kutrimuser.json'

kutrimuser.forEach((data)=>{

    test(`Register user: ${data.email}`, async ({registeruser})=>{

        await registeruser.getByPlaceholder('Enter your first name').fill(data.firstName)
        await registeruser.getByPlaceholder('Enter your last name').fill(data.lastName)
        await registeruser.getByPlaceholder('Enter your email address').fill(data.email)
        await registeruser.getByPlaceholder('Enter your mobile number').fill(data.mobile)
        await registeruser.locator("#password").fill(data.password)
        await registeruser.locator("#confirmPassword").fill(data.password)

    })

})
