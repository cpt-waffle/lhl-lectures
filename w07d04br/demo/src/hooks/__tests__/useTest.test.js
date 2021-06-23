import { renderHook, act } from "@testing-library/react-hooks";
import useTest from '../useTest';


it('tests if 2 + 2 = 4', () => {
	const result = 2 + 2;
	expect(result).toBe(4);
}) 


it('tests a hook', () => {
  const { result } = renderHook(() => useTest());

  act(() => {
    result.current.add(3);
  })

  expect(result.current.num).toBe(3);

})