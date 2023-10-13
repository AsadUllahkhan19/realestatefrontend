import React from 'react';
import Sidebar from './common/Sidebar';

const Layout = ({children}) => {
  return (
    <div className='flex layout'>
        <Sidebar/>
        <main className='w-screen h-screen'>
            {children}
        </main>
</div>
  )
}

export default Layout;