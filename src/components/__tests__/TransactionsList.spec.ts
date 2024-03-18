import { describe, it, expect } from 'vitest'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { mount } from '@vue/test-utils'

import TransactionsList from '../transactions/TransactionsList.vue'

describe('TransactionsList', () => {
  const transactions = [
    { id: 1, title: 'Transaction 1', value: '$100', color: 'blue' },
    { id: 2, title: 'Transaction 2', value: '$200', color: 'red' }
  ]

  it('renders TableHeader with correct props', () => {
    const wrapper = mount(TransactionsList, {
      props: {
        transactions: transactions,
        loading: false
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    const tableHeader = wrapper.findComponent({ name: 'TableHeader' })
    expect(tableHeader.exists()).toBe(true)
  })

  it('renders transactions list when loading is false', () => {
    const wrapper = mount(TransactionsList, {
      props: {
        transactions: transactions,
        loading: false
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    expect(wrapper.find('ul').exists()).toBe(true)
    expect(wrapper.findAll('li')).toHaveLength(transactions.length)
  })

  it('renders loading component when loading is true', () => {
    const wrapper = mount(TransactionsList, {
      props: {
        transactions: transactions,
        loading: true
      },
      global: {
        components: {
          BaseLoading: {
            template: '<div id="loading"></div>'
          }
        }
      }
    })

    const loadingComponent = wrapper.find('#loading')
    expect(loadingComponent.exists()).toBe(true)
  })

  it('renders transactions properly', () => {
    const wrapper = mount(TransactionsList, {
      props: {
        transactions: transactions,
        loading: false
      },
      global: {
        components: {
          FontAwesomeIcon
        }
      }
    })

    const transactionItems = wrapper.findAll('li')
    transactions.forEach((transaction, index) => {
      const transactionItem = transactionItems[index]
      expect(transactionItem.text()).toContain(transaction.title)
      expect(transactionItem.text()).toContain(transaction.value)
      expect(transactionItem.findComponent(FontAwesomeIcon).exists()).toBe(true)
    })
  })
})
