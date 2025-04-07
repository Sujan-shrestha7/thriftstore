import React from 'react'
import StoreHome from './storeHome'

const StoreDashboard: React.FC = () => {
  return (
    <div>
      <StoreHome/>
      <div className='ml-[275px]'>
        <p className='text-[28px] font-bold'>Dashboard</p>
      </div>
    </div>
  )
}

export default StoreDashboard
