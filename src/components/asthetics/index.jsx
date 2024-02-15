import React, { useState, useEffect } from 'react';
import AestheticLg from './AestheticLg';
import AestheticMd from './AestheticMd'

const Aesthetic = () => {
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize)
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [setScreenSize]);

    return (
        <>
            {
                screenSize > 1540 ? (<AestheticLg />) : (<AestheticMd screenSize={screenSize} />)
            }
        </>
    )
}

export default Aesthetic;