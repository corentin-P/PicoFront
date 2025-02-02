const apiUrl = import.meta.env.VITE_API_URL
/**
 * 
 * @param {string} method : can be GET, POST, PUT...
 * @param {string} route : route we want to call (ex : /tournament/all)
 * @param {array} params : params to send
 */
async function callApi(method, route, params){
    console.log(apiUrl)
    let response = await fetch(apiUrl + route, {
        method: method,
        //body: JSON.stringify(params)
    })

    return await response.json()
}

export default callApi