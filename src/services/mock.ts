const transactions = [
  {
    id: 1,
    title: 'Salary',
    color: 'green',
    value: 'R$10,98'
  },
  {
    id: 2,
    title: 'Food',
    color: 'red',
    value: 'R$10,98'
  },
  {
    id: 3,
    title: 'Salary',
    color: 'green',
    value: 'R$10,98'
  },
  {
    id: 4,
    title: 'Food',
    color: 'red',
    value: 'R$10,98'
  }
]

const categories = [
  {
    id: 1,
    title: 'Compras',
    color: 'green',
    value: 62
  },
  {
    id: 2,
    title: 'Boletos',
    color: 'red',
    value: 14
  },
  {
    id: 3,
    title: 'Investimentos',
    color: 'green',
    value: 5
  }
]

const summary = {
  income: 1000,
  outcome: 500
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ transactions, categories, summary })
    }, 1000)
  })
}

export default fetchData
