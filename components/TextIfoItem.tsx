import React from 'react'

const TextIfoItem: React.FC<{ label?: React.ReactNode, number?: number }> = ({ label, number }) => {
    return (
        <div className="flex items-center">
            <div className="font-bold text-xs md:text-sm mr-2 py-1 px-3 bg-[rgba(110,57,255,0.2)] text-purple-600 rounded-full w-[30px]">{number}</div>
            <div className="font-bold">{label}</div>
        </div>
    )
}

export default TextIfoItem