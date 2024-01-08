// Loadingspinner component
import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loadingspinner = ({ loading }) => {
        return (
                <div className='flex justify-center items-center' style={{ display: loading ? 'flex' : 'none', height: '100vh', width: '100vw' }}>
                        <ScaleLoader color="#202020" />
                </div>
        );
};

export default Loadingspinner;
