import {h} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"

const separator = h('hr', {
    style: {
        borderColor: 'rgba(0, 0, 0, 0.1)',
        margin: '20px',
    },
})

function faIcon(props) {
    return {
        element: h('div', [h(FontAwesomeIcon, {size: 'lg', ...props})]),
    }
}

export const iconChapter = faIcon({icon: 'fa-solid fa-list-ul'})
export const iconSection = faIcon({icon: 'fa-solid fa-list-alt'})
export const iconPage = faIcon({icon: 'fa-solid fa-file-alt'})
