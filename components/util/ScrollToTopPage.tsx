import React, { useEffect, useState } from 'react';

const ScrollToTopPage: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) 
            {
                setShowButton(true);
            } 
            else 
            {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`fixed bottom-4 right-4 bg-gray-700 text-white rounded-md p-4 cursor-pointer transition-opacity ${showButton ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
            <span className="material-icons-outlined">arrow_upward</span>
        </div>
    );
};

export default ScrollToTopPage;