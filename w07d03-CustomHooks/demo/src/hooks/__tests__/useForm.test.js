import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../useForm";

test("Just to see if it passes", () => {
  expect(true).toBe(true);
});

test("useForm should start with an empty string", () => {
  const { result } = renderHook( () => useForm());
  console.log(result.current);
  expect(result.current.value).toBe("");
})

test('useForm should be able to be set to Apple', () => {
  const { result } = renderHook( () => useForm());
  console.log(result.current);
  const evt = { target: { value: "Apple"}};
  act(() => {
    result.current.handleSetValue(evt);
  })
  expect(result.current.value).toBe('Apple');
})