import React from 'react'

function HomepageItem(props: any) {
    return (
        //   <div className="bg-green-300 border-blue-600 border-4 p-4 m-4 rounded">Hello World</div>

        <div className='p-4 border-black border-4 border-r-4 bg-white h-1/2 w-64 rounded-xl'>
            <h1 className='text-center'>{props.text}<br></br>{props.price}</h1>
        </div>
    )
}

export default HomepageItem