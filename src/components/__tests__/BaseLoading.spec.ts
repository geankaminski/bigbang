import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import BaseLoading from '../BaseLoading.vue'

describe('BaseLoading', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseLoading)
    expect(wrapper.find('[role="status"]').exists()).toBe(true)
  })

  it('renders with default size class', () => {
    const wrapper = mount(BaseLoading)
    expect(wrapper.find('.w-16.h-16').exists()).toBe(true)
  })

  it('renders with custom size class', () => {
    const customWidth = 'w-20'
    const customHeight = 'h-20'
    const wrapper = mount(BaseLoading, {
      props: {
        size: `${customWidth} ${customHeight}`
      }
    })
    expect(wrapper.find('svg').classes()).toContain(customWidth)
    expect(wrapper.find('svg').classes()).toContain(customHeight)
  })
})
