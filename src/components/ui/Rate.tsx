import React from 'react'

const Rate = ({ value }: { value: number }) => {
    return (
        <div className='flex items-center justify-start mt-1.5'>
            <span className='star-rating text-[10px] block' style={{"--rating":value} as React.CSSProperties}></span>
            <span className='text-xs font-medium text-dark ml-2 mt-0.5 block'>{value}</span>
        </div>
    )
}

export default Rate