import React, { useState } from 'react'

function Card({ title, amount, unit, icon, colors }) {

    return (
        <>
            <div className='px-7 py-4 border border-gray-300 rounded-md w-max flex flex-col items-center justify-center gap-3 hover:scale-105 hover:shadow-md hover:shadow-slate-300 transition-all hover:cursor-pointer'>
                <h2 className='text-2xl text-wrap font-semibold flex items-center justify-center'><span className={colors}>{icon}</span>{ " "}{title}</h2>
                <p className='text-xl '>{amount} {unit || "" }</p>
            </div>
        </>
    )
}

export default Card