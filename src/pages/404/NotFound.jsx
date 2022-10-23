import React from 'react';

import notFound from "../../assets/img/notfound.jpg"
import Layout from '../../components/HOC/Layout';

const NotFound = () => {
    return (
        <div className='flex flex-row justify-center items-center'>
            <img className='' src={notFound} alt="NotFound" />
        </div>
    );
};

export default Layout(NotFound);