const axios = require('axios').default;

export const Api = (url) => {

    axios.get(url)
        .then(response => {
            response.data;
        })
        .catch(error => {
            console.log(error);
        })

}
