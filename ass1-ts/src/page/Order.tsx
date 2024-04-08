import React from 'react'


type Props = {}

const Order = (props: Props) => {
    
  return (
    <div className='container mx-auto'>
        <h1>Order</h1>
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
                col 8
            </div>
            <div className='col-span-4'>
                col-4
            </div>
        </div>
    </div>
  )
}

export default Order