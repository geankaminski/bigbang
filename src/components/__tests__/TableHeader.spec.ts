import { describe, it, expect } from 'vitest'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoneyCheckDollar, faBullseye } from '@fortawesome/free-solid-svg-icons'

import { mount } from '@vue/test-utils'

import TableHeader from '../TableHeader.vue'

describe('TableHeader', () => {
  it('renders title properly', () => {
    const title = 'My Title'
    const wrapper = mount(TableHeader, {
      props: {
        title: title,
        icon: 'dollar'
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    expect(wrapper.text()).toContain(title)
  })

  it('renders the dollar icon when icon prop is set to "dollar"', () => {
    const wrapper = mount(TableHeader, {
      props: {
        title: 'Title',
        icon: 'dollar'
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    const dollarIcon = wrapper.findComponent(FontAwesomeIcon)
    expect(dollarIcon.exists()).toBe(true)
    expect(dollarIcon.props('icon')).toBe(faMoneyCheckDollar)
  })

  it('renders the target icon when icon prop is set to "target"', () => {
    const wrapper = mount(TableHeader, {
      props: {
        title: 'Title',
        icon: 'target'
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    const targetIcon = wrapper.findComponent(FontAwesomeIcon)
    expect(targetIcon.exists()).toBe(true)
    expect(targetIcon.props('icon')).toBe(faBullseye)
  })

  it('renders proper text for last 7 days', () => {
    const wrapper = mount(TableHeader, {
      props: {
        title: 'Title',
        icon: 'dollar'
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    const last7DaysText = wrapper.find('.text-hint')
    expect(last7DaysText.text()).toBe('últimos 7 dias')
  })

  it('renders link properly', () => {
    const wrapper = mount(TableHeader, {
      props: {
        title: 'Title',
        icon: 'dollar'
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    const verTudoLink = wrapper.find('.text-link')
    expect(verTudoLink.text()).toBe('Ver tudo')
    expect(verTudoLink.attributes('href')).toBe('#')
  })
})
