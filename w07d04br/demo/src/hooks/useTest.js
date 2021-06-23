import { useState } from 'react';

const useTest = () => {
	const [num, setNum] = useState(0);

	const add = (n) => setNum(prev => prev + n);

	const sub = (n) => setNum(prev => prev - n);

	return {num, add, sub}
}


export default useTest;