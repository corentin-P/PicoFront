const apiUrl = import.meta.env.VITE_API_URL
/**
 * 
 * @param {string} method : can be GET, POST, PUT...
 * @param {string} route : route we want to call (ex : /tournament/all)
 * @param {array} params : params to send
 */
async function callApi(method, route, params){
    console.log(apiUrl)
    console.log(apiUrl + route)
    let response = await fetch(apiUrl + route, {
        method: method,
        //body: JSON.stringify(params)
    })
    response = await response.json();
    console.log(response)
    return response
}

export default callApi