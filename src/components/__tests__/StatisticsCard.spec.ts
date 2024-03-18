import { describe, it, expect, vitest } from 'vitest'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { mount } from '@vue/test-utils'

import StatisticsCard from '../statistics/StatisticsCard.vue'

vitest.mock('@/composables/useCounterAnimation', () => ({
  useCounterAnimation: vitest.fn(() => ({
    count: 100,
    animate: vitest.fn()
  }))
}))

describe('StatisticsCard', () => {
  it('renders title properly', () => {
    const title = 'My Title'
    const wrapper = mount(StatisticsCard, {
      props: {
        title: title,
        value: 100,
        id: 'my-id'
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    expect(wrapper.text()).toContain(title)
  })

  it('renders initial count properly', () => {
    const wrapper = mount(StatisticsCard, {
      props: {
        title: 'Title',
        value: 100,
        id: 'my-id'
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    expect(wrapper.text()).toContain('R$100')
  })

  it('calls animate when props.value changes', async () => {
    const wrapper = mount(StatisticsCard, {
      props: {
        title: 'Title',
        value: 100,
        id: 'my-id'
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    await wrapper.setProps({ value: 200 })
    expect((wrapper.vm as any).animate).toHaveBeenCalled()
  })

  it('renders FontAwesomeIcon properly', () => {
    const wrapper = mount(StatisticsCard, {
      props: {
        title: 'Title',
        value: 100,
        id: 'my-id'
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    const icon = wrapper.findComponent(FontAwesomeIcon)
    expect(icon.exists()).toBe(true)
    expect(icon.props('icon')).toBe(faBars)
  })
})
