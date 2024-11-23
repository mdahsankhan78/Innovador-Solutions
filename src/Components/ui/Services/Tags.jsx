import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Tags = ({ icon, text, side }) => {
    return (
        <>
            <div className="flex space-x-6 items-center my-12">
                {side === 'right' ? (
                    <>
                        <h1 className='text-xl text-black font-bold'>{text}</h1>
                        <FontAwesomeIcon className='text-primary h-12' icon={icon} />
                    </>
                ) : (
                    <>
                    <FontAwesomeIcon className='text-primary h-12' icon={icon} />
                    <h1 className='text-xl text-black font-bold '>{text}</h1>
                    </>
                )}
            </div>
        </>
    )
}

export default Tags