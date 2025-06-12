import React from 'react'

function Button({ className, title }) {
    return (
        <button className={`px-5 py-2.5 rounded-md text-sm font-thin cursor-pointer transition-colors text-center ${className}`}>
            {title}
        </button>
    )
}

export default Button