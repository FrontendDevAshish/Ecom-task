import axios from "axios";

const API_KEY = "abc";
const api = axios.create({
    baseURL: 'http://stageapi.monkcommerce.app/task/products',
    headers: {
      'x-api-key': API_KEY
    }
})
export const fetchProducts = (search='',page=0,limit=10) =>{
    return api.get(`search`,{
        params:{ search,page,limit }
    })
}