import React from 'react'

const InputField = ({ value, label, placeholder, type, onChange }) => {
    return (
        <div className="flex flex-col my-3">
            {label && <label htmlFor='input-field'>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='outline-none border-gray-300 border rounded-sm px-3 py-2 mt-1' />
        </div>
    )
}

export default InputField