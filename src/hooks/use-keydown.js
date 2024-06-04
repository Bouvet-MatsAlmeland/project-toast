import React from "react";

const useKeyDown = (key, callback) => {
    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === key) {
                callback();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [key, callback])
}

export default useKeyDown;