import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div id='dashboard'>
        <aside>
            <Link to='/Users'><a >Users</a></Link>
            <Link to='/dashboard/show'><a >Product</a></Link>
        </aside>
        <div className='content'>
            <header>
                <div>
                    <h1 className='font-mono font-bold text-2xl'>Book<span className='text-blue-600'>Shop</span></h1>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
            
    </div>
  )
}

export default Dashboard