import {useState, useEffect} from "react";

export default function ScrollTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`scroll-top ${showButton ? 'visible' : ''}`}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
            ↑
        </button>
    );
}