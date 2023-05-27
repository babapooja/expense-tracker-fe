import React from 'react'
import Header from '../components/Header'
import Balance from '../components/Balance'
import IncomeExpenses from '../components/IncomeExpenses'
import TransactionList from '../components/TransactionList'
import AddTransaction from '../components/AddTransaction'

const Home = () => {
  return (
    <div className='w-1/4'>
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  )
}

export default Home