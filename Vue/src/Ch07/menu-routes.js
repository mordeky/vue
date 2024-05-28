import Chapter from '../assets/menu-routes.js'

export async function getMenuRoutes(routes){
    // const routes = []
    // const app1 = await import('./4.nested-routes/0-flat-route/App.vue')
    return await Chapter.create(routes, 7, [
        [
            4, 'Nested Routes // 4.nested-routes',
            4.1, 'Flat Router View // 0-flat-route',
            4.2, 'Flat Router View (Level Param) // 0-flat-route-levels-param',
            4.3, 'Nested Router View (Level Param) // 1-nest-route-levels-param',
            4.4, 'Nested Router View (Level Loop) // 2-nest-route-levels-loop',
            4.5, 'Nested Router View (Route Class) // 3-nest-route-class',
        ],
    ])
}

// export default menu;
