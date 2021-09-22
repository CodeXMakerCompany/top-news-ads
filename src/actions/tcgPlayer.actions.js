// import axios from "axios";
// import { types } from "../types/types";
// import { api } from "../components/config/api.config";

export const getAuth =  payload  =>  {

//     axios.get(`${api.tcgPlayerEndpoint}authorize/authCode`).then( r => {
// console.log(r);
//     }).catch( err => console.log(err))
//     console.log('tcPLAYER');
    return {
        type: true,
        payload
    }
}