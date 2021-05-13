import { useState } from 'react';

function useColor(c) {
    const colors = [...c];
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex(prev => prev + 1);
    }

    const prev = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

    return { currentColor: colors[currentIndex], next, prev };
}

export default useColor;