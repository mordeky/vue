import {normRoutesName as nrn} from "@/assets/norms.js";

const routeNamePre = '7.4.1-'

export function norm(name) {
    return routeNamePre + name
}

export function normRoutesName(routes){
    nrn(routes, norm)
}
