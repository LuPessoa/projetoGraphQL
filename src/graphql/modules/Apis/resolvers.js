const db = require("../../../db");

module.exports = {
    Query: {
        api(obj, args) {
            return db.apis.find((api) => api.id === id);
        },
        apis : () => db.apis,
    },
    Mutation: {
        createApi: (_,{id, api_name, api_host, api_login, api_secret, api_auth_method, api_call_method, status}) => {
            const api = {id, api_name, api_host, api_login, api_secret, api_auth_method, api_call_method, status};
            db.apis.push(api);
            return api;
        },
        updateApi: (_, {id, api_name, api_host, api_login, api_secret, api_auth_method, api_call_method, status}) => {
            const api = db.apis.find((api)=> api.id ===id);
            api.id = api.id
            api.api_name = api.api_name
            api.api_host =  api.api_host 
            api.api_login = api.api_login 
            api.api_secret = api.api_secret
            api.api_auth_method = api.api_auth_method
            api.api_call_method = api.api_call_method
            api.status = api.status 
            return api;
        },
        deleteApi: (_, {id}) => {
            const filteredApis = db.apis.filter((api) =>api.id !== id);
            apis = filteredApis;
            return true;

        }
        }
    };