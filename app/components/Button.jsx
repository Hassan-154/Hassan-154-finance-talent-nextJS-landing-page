import React from 'react'

function Button({ className, title }) {
    return (
        <button className={`text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors text-center ${className}`}>
            {title}
        </button>
    )
}

export default Button