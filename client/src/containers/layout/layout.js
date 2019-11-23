import React from 'react'

import Sidebar from '../../components/sidebar';
import Search from '../../components/shop-search';


const Layout = ({children}) => (
    <div className='view-container'>
        <div className='container'>

            <div className='row'>
                <Search />
                <div className='col-sm-3'>
                    <Sidebar />
                </div>
                <div className='col'>
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default Layout;