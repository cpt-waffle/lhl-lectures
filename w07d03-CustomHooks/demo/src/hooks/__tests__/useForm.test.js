import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../useForm";

it("Just to see if it passes", () => {
  expect(true).toBe(true);
});

it('changed the value from nothing to apple', () => {
  const { result } = renderHook(() => useForm());
  console.log(result.current);
  act(() => {
    result.current.handleVal('Apple');
  })
  expect(result.current.value).toBe('Apple');
})