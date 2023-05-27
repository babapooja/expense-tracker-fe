import React, { useContext, useState } from 'react'
import Button from './Button'
import InputField from './InputField'
import { GlobalContext } from '../context/GlobalState'


const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const transaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }

        addTransaction(transaction);
    }

    return (
        <>
            <h3 className='mt-7 font-bold text-lg'>Add new transaction</h3>
            <hr />
            <form onSubmit={onSubmit}>
                <div>
                    {/* <label htmlFor="text" className='font-medium text-sm'>Text</label> */}
                    <InputField value={text} onChange={(e) => setText(e.target.value)} type="text" label="Text" placeholder="Enter text..." />
                </div>
                <div>
                    <InputField type="number" value={amount} onChange={(e) => setAmount(e.target.value)} label="Amount (negative - expense, positive - income)" placeholder="Enter amount..." />
                </div>
                <Button text="Add Transaction" />

            </form>
        </>
    )
}

export default AddTransaction