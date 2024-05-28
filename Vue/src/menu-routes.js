const chapters = ['Ch07']

export const menu = [
    {
        href: '/',
        title: 'Getting Started',
        // header: 'Getting Started',
        hiddenOnCollapse: true,
        // hiddenOnCollapse: false,
    }
]

const routes = [
    {path: '/', component: () => import('./Home.vue')}
]

export async function getMenuRoutes() {
    for (let ch of chapters) {
        const module = await import(`./${ch}/menu-routes.js`)
        const chMenu = await module.getMenuRoutes(routes)
        // routes.push(...object.routes)
        menu.push(chMenu)
    }
    return {menu, routes}
}
