const UserClient = require('../user_client.js');
const UserService = require('../user_service.js');

jest.mock('../user_client');

describe('user-service',()=>{
    const login = jest.fn( async ()=> 'success');
    UserClient.mockImplementation(()=>{
        return {
            login,
        }
    })
    let userService;
    beforeEach(()=>{
        userService = new UserService(new UserClient());
    })

    it('calls login() on UserClient when tries to login', async()=>{
        await userService.login('abd','abd');
        expect(login.mock.calls.length).toBe(1);
        expect(userService.isLogedIn).toEqual(true)
    })
    it('sholud not call login() on UserClient again if already logged in',async ()=>{
        await userService.login('abc','abc');
        await userService.login('abc','abc');
        expect(login.mock.calls.length).toBe(1);
    })
})