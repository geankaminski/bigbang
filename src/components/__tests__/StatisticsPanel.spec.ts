import { describe, it, expect, vitest } from 'vitest'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { mount } from '@vue/test-utils'

import StatisticsPanel from '../statistics/StatisticsPanel.vue'

vitest.mock('@/composables/useCounterAnimation', () => ({
  useCounterAnimation: vitest.fn(() => ({
    count: 100,
    animate: vitest.fn()
  }))
}))

describe('StatisticsPanel', () => {
  const cards = [
    { id: '1', title: 'Card 1', value: 100 },
    { id: '2', title: 'Card 2', value: 200 }
  ]

  it('renders title and last 7 days properly', () => {
    const wrapper = mount(StatisticsPanel, {
      props: {
        cards: cards,
        loading: false
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    expect(wrapper.text()).toContain('Painel de estatísticas')
    expect(wrapper.text()).toContain('últimos 7 dias')
  })

  it('renders StatisticsCard component for each card when loading is false', () => {
    const wrapper = mount(StatisticsPanel, {
      props: {
        cards: cards,
        loading: false
      },
      global: {
        components: {
          FontAwesomeIcon,
          StatisticsCard: {
            template: '<div class="card"></div>'
          }
        }
      }
    })

    const statisticsCards = wrapper.findAll('.card')
    expect(statisticsCards).toHaveLength(cards.length)
  })

  it('does not render StatisticsCard component when loading is true', () => {
    const wrapper = mount(StatisticsPanel, {
      props: {
        cards: cards,
        loading: true
      },
      global: {
        components: {
          FontAwesomeIcon,
          StatisticsCard: {
            template: '<div class="mock-statistics-card"></div>'
          }
        }
      }
    })

    const statisticsCards = wrapper.findAll('.mock-statistics-card')
    expect(statisticsCards).toHaveLength(0)
  })
})
