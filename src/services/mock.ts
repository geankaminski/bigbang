const balance = 304.78

const cards = [
  {
    id: '1',
    title: 'Conta PJ',
    value: 39882
  },
  {
    id: '2',
    title: 'Recebimentos',
    value: 76588
  },
  {
    id: '3',
    title: 'Lucro',
    value: 15887
  }
]

const transactions = [
  {
    id: 1,
    title: 'Mercadinho da Cidade',
    color: '#FDFF9D',
    value: 'R$10,98'
  },
  {
    id: 2,
    title: 'Tenda Nostra',
    color: '#FF9D9D',
    value: 'R$26,38'
  },
  {
    id: 3,
    title: 'Farmácia Um',
    color: '#C8FF9D',
    value: 'R$43,17'
  },
  {
    id: 4,
    title: 'Academia Body',
    color: '#AB9DFF',
    value: 'R$62,12'
  },
  {
    id: 4,
    title: 'ShopOnline',
    color: '#FF9DEF',
    value: 'R$135,24'
  }
]

const categories = [
  {
    id: 1,
    title: 'Compras',
    color: '#FF9999',
    value: 62
  },
  {
    id: 2,
    title: 'Boletos',
    color: '#A799FF',
    value: 14
  },
  {
    id: 3,
    title: 'Investimentos',
    color: '#FF99D6',
    value: 5
  }
]

const summary = {
  income: 2789.21,
  outcome: 1278.47
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ transactions, categories, summary, balance, cards })
    }, 1000)
  })
}

export default fetchData
