import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const totalAmount = transactions.reduce((total, transaction) => (total += transaction.amount), 0);


  return (
    <>
      <h4 className='mt-5'>Your Balance</h4>
      <h1 className='text-2xl font-semibold'>${totalAmount.toFixed(2)}</h1>
    </>
  )
}

export default Balance