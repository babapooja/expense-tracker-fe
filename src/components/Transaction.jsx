import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '' : '+'
    const getClass = transaction.amount < 0 ? 'border-r-red-600' : 'border-r-green-600';

    return (
        <li className={`my-1 px-4 py-2 bg-white flex justify-between  border-r-4 group relative ${getClass}`}>
            {transaction.text} <span>{sign}${transaction.amount}</span>
            <button
                onClick={() => deleteTransaction(transaction.id)}
                className={`text-red-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-red-100 px-2 rounded-full absolute -right-8`}>x
            </button>
        </li>
    )
}

export default Transaction