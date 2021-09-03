import { useState } from "react";

const useColor = function(arg) {
    const [index, setIndex] = useState(0);
    const currentColor = arg[index];

    const next = function() {
        if (index < arg.length - 1){
            setIndex((prev) => {
                return prev + 1;
            })
        }
    }

    const previous = function() {
        if (index !== 0){
            setIndex((prev) => {
                return prev - 1;
            })
        }
    }

    return {currentColor, next, previous}
}

export default useColor;