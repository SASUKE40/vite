import { createVNode } from 'vue'

declare const __DEV__: boolean

if (__DEV__) {
  console.log(
    `[vue tip] You are using an non-optimized version of Vue 3 JSX, ` +
      `which does not take advantage of Vue 3's runtime fast paths. An improved ` +
      `JSX transform will be provided at a later stage.`
  )
}

export function jsx(tag: any, props = null, children: any = null) {
  if (arguments.length > 3 || (children && '__v_isVNode' in children)) {
    children = Array.prototype.slice.call(arguments, 2)
  }
  return createVNode(tag, props, children)
}
