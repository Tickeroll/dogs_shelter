import {client} from "../../../utils/url";

const animalsGet = (size, age, gender) => {
   return client.get("/animals/search", {params: {size, age, gender}},  )
};

const animalsGetFilter = (size, age, gender) => {
   return client.get("/animals/search/filter", {params: {size, age, gender}},  )
};

const animalsGetNextPage = (nextPage) => {
   return client.get(nextPage)
};

const animalGet = (name) => {
    return client.get(`/animals/${name}`)
};

export default {
    animalsGet,
    animalsGetFilter,
    animalsGetNextPage,
    animalGet
}