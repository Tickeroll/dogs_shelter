import {client} from "../../../utils/url";

const animalsGet = () => {
   return client.get("/animals/search" )
}

export default {
    animalsGet
}