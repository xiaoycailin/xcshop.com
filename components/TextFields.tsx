import React from 'react'

export const InputData: React.FC<{ label?: string, placeholder?: string, id?: string, type?: React.HTMLInputTypeAttribute }> = ({ label, placeholder, id, type }) => {
    return (
        <div>
            <label className="mb-2 text-xs md:text-base block" style={{ fontSize: 13 }} htmlFor={id}>{label}</label>
            <input placeholder={placeholder} type={type} className="relative block w-full appearance-none border border-primary-500 bg-secondary-700 px-3 py-2 text-xs placeholder-secondary-200 focus:z-10 focus:border-primary-500 focus:outline-none focus:border-purple-500 disabled:cursor-not-allowed disabled:opacity-75 !rounded-md !border-bg-color !bg-secondary-200 !text-black !placeholder-black/60 accent-secondary-800 !ring-0 placeholder:text-xs focus:!bg-white focus:!ring-transparent dark:!text-secondary-800 dark:!placeholder-secondary-800" title="User ID" id={id} />
        </div>
    )
}
