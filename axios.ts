import axios from "axios";

let name: any 

export default async function axiosGet(url : String) {
    name = await axios.get(url)
    console.log(name)
    return(name)
}