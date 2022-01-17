class UserClient {
    login(id,password){
        return fetch('https://example.com/login/id+password')
        .then((response) => response.json());
    }
}

module.exports = UserClient;