import React from 'react'

const ToolTip = ({title,children}) => {
  return (
    <div className='relative group flex flex-col  '>
        {children}
        <div className='text-white rounded-sm bg-opacity-90 w-max py-2 px-2 font-vazir text-xs z-[5000] bg-gray-700 absolute -bottom-10  hidden group-hover:block'>
            {title}
        </div>
    </div>
  )
}

export default ToolTip