import {iconChapter, iconSection, iconPage} from './icons.js'

function trimPath(routes){
    // 剪除路径前缀中可能出现的“/”。

    for (let i = 0; i < routes.length; i++) {
        if (routes[i].path.startsWith('/')){
            routes[i].path = routes[i].path.slice(1)
            if('children' in routes[i])
                trimPath(routes[i].children)
        }
    }
}

class RouteUnit {
    constructor(path, app, routes) {
        this.path = path
        this.component = app
        this.children = routes
    }

    static async create(path, srcPath) {
        // const currentWorkingDirectory = process.cwd();
        // console.log(window.location.pathname)

        const app = ()=> import(`${srcPath}/App.vue`)
        // const app = await import(`${srcPath}/App.vue`)
        const {routes} = await import(`${srcPath}/routes.js`)
        //!!! 动态导入组件实际上导入的是 app.default，这里特别容易弄错，浪费了很多时间。
        //    该问题是在`Ch07/menu-routes.js`中直接测试中得以解决的。2024/05/27
        // return new RouteUnit(path, app.default, routes)
        trimPath(routes) // 剪除路径前缀中可能出现的“/”。
        return new RouteUnit(path, app, routes)
    }
}

function padNumber(number) {
    return number.toString().padStart(2, '0');
}

class Subsection {
    icon = iconPage

    constructor(href, title) {
        this.href = href
        this.title = title
    }

    static async create(routes, chNum, secFolder, subsec) {
        const href = `/${chNum}.${subsec.num}`
        const fullPath = `../Ch${padNumber(chNum)}/${secFolder}/${subsec.folder}`
        const route = await RouteUnit.create(href, fullPath)
        routes.push(route)
        return new Subsection(href, subsec.title)
    }
}

class Section {
    icon = iconSection

    constructor(title, child) {
        this.title = title
        this.child = child
    }

    static SecAider = class {
        constructor(chNum, row) {
            const [num, title_folder] = row
            const [title, folder] = title_folder.split('//').map(e => e.trim())
            this.num = num
            this.title = `${chNum}.${num} ${title}`
            this.folder = folder
        }
    }

    static async create(routes, chNum, subsecList) {
        const child = []
        const sec = new this.SecAider(chNum, subsecList.slice(0, 2))
        for (let i = 2; i < subsecList.length; i += 2) {
            const subsec = new this.SecAider(chNum, subsecList.slice(i, i + 2))
            const page = await Subsection.create(routes, chNum, sec.folder, subsec)
            child.push(page)
        }
        return new Section(sec.title, child)
    }
}

class Chapter {
    icon = iconChapter

    constructor(title, child) {
        this.title = title
        this.child = child
    }

    static async create(routes, chNum, sectionList) {
        // routes.length = 0
        const title = `Chapter ${chNum}`
        const child = []
        for (let section of sectionList) {
            const sec = await Section.create(routes, chNum, section)
            child.push(sec)
        }
        return new Chapter(title, child)
    }
}

export default Chapter;
