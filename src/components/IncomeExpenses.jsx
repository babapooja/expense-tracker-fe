import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter(item => item.amount > 0)
    .reduce((acc, transaction) => acc += transaction.amount, 0)

  const expenses = transactions
    .filter(item => item.amount < 0)
    .reduce((acc, transaction) => acc += transaction.amount, 0) * -1

  return (
    <div className='bg-white px-5 py-3 flex justify-center gap-5 mt-5 shadow-md'>
      <div className='flex flex-col'>
        <h4 className='uppercase'>Income</h4>
        <p className='text-green-600 font-medium text-xl'>{income.toFixed(2)}</p>
      </div>
      <div className='border'></div>
      <div className='flex flex-col'>
        <h4 className='uppercase'>Expense</h4>
        <p className='text-red-600 font-medium text-xl'>{expenses.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses