<template>
  <li v-if="item.component && !isHidden">
    <component :is="item.component" v-bind="item.props" />
  </li>
  <li
    v-else-if="item.header && !isHidden"
    :class="['vsm--header', item.class]"
    v-bind="item.attributes"
  >
    {{ item.header }}
  </li>
  <li
    v-else-if="!isHidden"
    :class="itemClass"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
    v-on="
      isCollapsed && isFirstLevel
        ? { mouseenter: onMouseEnter, mouseleave: onMouseLeave }
        : {}
    "
  >
    <component
      :is="linkComponentName ? linkComponentName : SidebarMenuLink"
      :item="item"
      :class="linkClass"
      v-bind="linkAttrs"
      @click="onLinkClick"
    >
      <template v-if="isCollapsed && isFirstLevel">
        <transition name="slide-animation">
          <div
            v-if="hover"
            class="vsm--mobile-bg"
            :style="mobileItemBackgroundStyle"
          />
        </transition>
      </template>
      <sidebar-menu-icon v-if="item.icon" :icon="item.icon" />
      <div
        :class="[
          'vsm--title',
          isCollapsed && isFirstLevel && !isMobileItem && 'vsm--title_hidden',
        ]"
        :style="isMobileItem && mobileItemStyle"
      >
        <span>{{ item.title }}</span>
        <sidebar-menu-badge v-if="item.badge" :badge="item.badge" />
        <div
          v-if="hasChild"
          :class="['vsm--arrow', { 'vsm--arrow_open': show }]"
        >
          <slot name="dropdown-icon" v-bind="{ isOpen: show }" />
        </div>
      </div>
    </component>
    <template v-if="hasChild">
      <transition
        :appear="isMobileItem"
        name="expand"
        @enter="onExpandEnter"
        @after-enter="onExpandAfterEnter"
        @before-leave="onExpandBeforeLeave"
        @after-leave="onExpandAfterLeave"
      >
        <div
          v-if="show"
          :class="['vsm--child', isMobileItem && 'vsm--child_mobile']"
          :style="isMobileItem && mobileItemDropdownStyle"
          v-bind="childAttrs"
        >
          <ul class="vsm--dropdown">
            <sidebar-menu-item
              v-for="subItem in item.child"
              :key="subItem.id"
              :item="subItem"
              :level="level + 1"
              :active-show="subActiveShow"
              @update-active-show="updateActiveShow"
            >
              <template #dropdown-icon="{ isOpen }">
                <slot name="dropdown-icon" v-bind="{ isOpen }" />
              </template>
            </sidebar-menu-item>
          </ul>
        </div>
      </transition>
    </template>
  </li>
</template>

<script>
export default {
  compatConfig: { MODE: 3 },
}
</script>

<script setup>
import { ref, toRefs } from 'vue'
import { useSidebar } from '../use/useSidebar'
import useItem from '../use/useItem'

import SidebarMenuLink from './SidebarMenuLink.vue'
import SidebarMenuIcon from './SidebarMenuIcon.vue'
import SidebarMenuBadge from './SidebarMenuBadge.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  level: {
    type: Number,
    default: 1,
  },
  activeShow: {
    type: String,
    default: undefined,
  },
})

const emits = defineEmits(['update-active-show'])

const { getSidebarProps, getIsCollapsed: isCollapsed } = useSidebar()
const { linkComponentName } = toRefs(getSidebarProps)
const subActiveShow = ref(undefined)

const updateActiveShow = (id) => {
  subActiveShow.value = id
}

const {
  show,
  hover,
  isFirstLevel,
  isHidden,
  hasChild,
  linkClass,
  linkAttrs,
  childAttrs,
  itemClass,
  isMobileItem,
  mobileItemStyle,
  mobileItemDropdownStyle,
  mobileItemBackgroundStyle,
  onLinkClick,
  onMouseOver,
  onMouseOut,
  onMouseEnter,
  onMouseLeave,
  onExpandEnter,
  onExpandAfterEnter,
  onExpandBeforeLeave,
  onExpandAfterLeave,
} = useItem(props, emits)
</script>
