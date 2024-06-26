import { ref, computed, inject, provide, reactive, toRefs } from 'vue'

export const initSidebar = (props, emits) => {
  const { collapsed, relative, width, widthCollapsed, rtl } = toRefs(props)

  const sidebarRef = ref(null)
  const isCollapsed = ref(collapsed.value)
  const mobileItem = reactive({
    item: null,
    rect: {
      top: 0,
      height: 0,
      padding: [0, 0],
      maxHeight: 0,
      maxWidth: 0,
      dropup: 0,
    },
    timeout: null,
  })
  const getMobileItem = computed(() => mobileItem.item)
  const getMobileItemRect = computed(() => mobileItem.rect)
  const currentRoute = ref('')

  const updateIsCollapsed = (val) => {
    isCollapsed.value = val
  }

  const setMobileItem = ({ item, itemEl }) => {
    clearMobileItemTimeout()
    const linkEl = itemEl.children[0]
    const rect = getMobileItemRectFromEl(linkEl)
    updateMobileItem(item)
    updateMobileItemRect(rect)
  }

  const getMobileItemRectFromEl = (el) => {
    const {
      top: elTop,
      bottom: elBottom,
      height: elHeight,
    } = el.getBoundingClientRect()
    const { left: sidebarLeft, right: sidebarRight } =
      sidebarRef.value.getBoundingClientRect()
    const { bottom: wrapperBottom, height: wrapperHeight } =
      sidebarRef.value.firstElementChild.getBoundingClientRect()
    const scrollWrapperEl = el.offsetParent
    const scrollWrapperOffsetTop = scrollWrapperEl.offsetTop
    const { top: scrollWrapperTop, height: scrollWrapperHeight } =
      scrollWrapperEl.getBoundingClientRect()

    let parentHeight = window.innerHeight
    let parentWidth = window.innerWidth
    let parentTop = 0
    let parentRight = parentWidth
    let maxWidth = parseInt(width.value) - parseInt(widthCollapsed.value)
    if (relative.value) {
      const parent = sidebarRef.value.parentElement
      parentHeight = parent.clientHeight
      parentWidth = parent.clientWidth
      parentTop = parent.getBoundingClientRect().top
      parentRight = parent.getBoundingClientRect().right
    }

    const rectWidth = rtl.value
      ? parentWidth - (parentRight - sidebarLeft)
      : parentRight - sidebarRight
    maxWidth = rectWidth <= maxWidth ? rectWidth : maxWidth

    const { paddingLeft: pl, paddingRight: pr } = window.getComputedStyle(el)
    const paddingLeft = parseInt(pl)
    const paddingRight = parseInt(pr)

    const absoluteTop = elTop - scrollWrapperTop
    const absoluteBottom =
      wrapperBottom -
      elTop -
      (wrapperHeight - (scrollWrapperHeight + scrollWrapperOffsetTop))
    let maxHeight = parentHeight - (elBottom - parentTop)
    const parentVisibleHeight = Math.min(
      window.innerHeight,
      window.innerHeight - parentTop,
      parentHeight,
      parentHeight + parentTop
    )
    const maxVisible =
      parentVisibleHeight - (Math.max(elBottom, 0) - Math.max(parentTop, 0))
    const dropup = maxVisible < parentVisibleHeight * 0.25 ? absoluteBottom : 0
    maxHeight = dropup ? elTop - parentTop : maxHeight

    return {
      top: absoluteTop,
      height: elHeight,
      padding: [paddingLeft, paddingRight],
      maxWidth,
      maxHeight,
      dropup,
    }
  }

  const unsetMobileItem = (immediate = true, delay = 800) => {
    if (!getMobileItem.value) return
    clearMobileItemTimeout()
    if (immediate) {
      updateMobileItem(null)
      return
    }
    mobileItem.timeout = setTimeout(() => {
      updateMobileItem(null)
    }, delay)
  }

  const clearMobileItemTimeout = () => {
    if (mobileItem.timeout) clearTimeout(mobileItem.timeout)
  }

  const updateMobileItem = (item) => {
    mobileItem.item = item
  }

  const updateMobileItemRect = (mobileItemRect) => {
    Object.keys(mobileItem.rect).forEach((key) => {
      mobileItem.rect[key] = mobileItemRect[key]
    })
  }

  const updateCurrentRoute = () => {
    const route =
      window.location.pathname + window.location.search + window.location.hash
    currentRoute.value = route
  }

  const onItemClick = (event, item) => {
    emits('item-click', event, item)
  }

  provide('vsmProps', props)
  provide('getSidebarRef', sidebarRef)
  provide('getIsCollapsed', isCollapsed)
  provide('getMobileItem', getMobileItem)
  provide('getMobileItemRect', getMobileItemRect)
  provide('getCurrentRoute', currentRoute)

  provide('updateIsCollapsed', updateIsCollapsed)
  provide('setMobileItem', setMobileItem)
  provide('unsetMobileItem', unsetMobileItem)
  provide('clearMobileItemTimeout', clearMobileItemTimeout)
  provide('onRouteChange', updateCurrentRoute)
  provide('emitItemClick', onItemClick)

  return {
    getSidebarRef: sidebarRef,
    getIsCollapsed: isCollapsed,
    getMobileItem,
    getMobileItemRect,
    getCurrentRoute: currentRoute,
    updateIsCollapsed,
    setMobileItem,
    unsetMobileItem,
    clearMobileItemTimeout,
    updateCurrentRoute,
    onItemClick,
  }
}

export const useSidebar = () => ({
  getSidebarProps: inject('vsmProps'),
  getSidebarRef: inject('getSidebarRef'),
  getIsCollapsed: inject('getIsCollapsed'),
  getMobileItem: inject('getMobileItem'),
  getMobileItemRect: inject('getMobileItemRect'),
  getCurrentRoute: inject('getCurrentRoute'),
  updateIsCollapsed: inject('updateIsCollapsed'),
  setMobileItem: inject('setMobileItem'),
  unsetMobileItem: inject('unsetMobileItem'),
  clearMobileItemTimeout: inject('clearMobileItemTimeout'),
  onRouteChange: inject('onRouteChange'),
  emitItemClick: inject('emitItemClick'),
})
