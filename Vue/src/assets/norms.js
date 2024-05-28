export function normRoutesName(routes, norm){
    for (let i = 0; i < routes.length; i++){
        routes[i].name = norm(routes[i].name)
        if('children' in routes[i])
            normRoutesName(routes[i].children, norm)
    }
    return routes
}
