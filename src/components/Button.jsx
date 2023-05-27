import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button className='p-3 outline-none bg-yellow-600 rounded-md my-3 w-full font-semibold' onClick={onClick}>{text}</button>
    )
}

export default Button