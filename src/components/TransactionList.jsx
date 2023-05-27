import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions)
    return (
        <>
            <h3 className='mt-7 font-bold text-lg'>History</h3>
            <hr />
            <ul className='list-none'>
                {transactions.map((transaction, i) => (<Transaction key={i} transaction={transaction} />))}

            </ul>
        </>
    )
}

export default TransactionList