// Create a Button component in components/common/Button.tsx that accepts size (small, medium, large) and shape (rounded-sm, rounded-md, rounded-full) as props.

import React from 'react'
import { ButtonProps } from '@/interfaces'

const Button=({label, size="medium", shape="rounded-full", onclick}: ButtonProps) =>{
  const sizeClasses = {
    small: 'text-sm px-2 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  }
  return (
    <div className="flex items-center justify-center flex-row space-x-4">
        <button
            onClick={onclick}
            className={`bg-blue-500 text-white ${sizeClasses[size || 'medium']}
                 ${shape || 'rounded-md'} hover:bg-blue-600 focus:outline-none 
                 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        >
            {label}
        </button>
    </div>
  )
}

export default Button
