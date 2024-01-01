import React, { useState, useEffect } from 'react';

const LoadingBar = ({ loading }) => {
        const [percentage, setPercentage] = useState(0);

        useEffect(() => {
                let interval;

                if (loading && percentage < 100) {
                        interval = setInterval(() => {
                                setPercentage((prevPercentage) => {
                                        const newPercentage = Math.random() * (100 - prevPercentage) / 2 + prevPercentage;
                                        return Math.min(newPercentage, 100);
                                });
                        }, 10);
                }

                return () => clearInterval(interval);
        }, [loading, percentage]);

        return (
                <div
                        style={{
                                backgroundColor: '#202020',
                                height: '4px',
                                width: `${percentage}%`,
                                position: 'fixed',
                                zIndex: 666000666,
                                transition: 'width 500ms ease-out, height 500ms ease-out',
                                display: loading ? 'block' : 'none',
                        }}
                />
        );
};

export default LoadingBar;
