// import { ConfigApi } from "@config";
const axios = require('axios');
export const dogApi = (lang?: string) => {
    const config = {
        method: 'get',
        url: `https://api-dog-breeds.herokuapp.com/api/dogs/working`,
        headers: {},
    };
    return axios(config)
        .then(function (response: any) {
            console.log('response', response);

            return response
        })
        .catch(function (error: any) {
            return error
        });
}
